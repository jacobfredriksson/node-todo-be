import express from "express";
import database from "./firebase";

// Utils
import handleError from "./lib/handleError";
import { schema } from "./lib/schema";

// Types
import { Item } from "./types";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "To see the list of items, go to /items.",
  });
});

app.get("/items", (req, res) => {
  database
    .collection("todos")
    .get()
    .then((snapshot) => {
      let result: Item[] = [];

      snapshot.forEach((doc) => {
        const document = { id: doc.id, todo: doc.data().todo };
        result.push(document);
      });

      res.json(result);
    });
});

app.post("/items/create", async (req, res) => {
  const newItem = { todo: req.body.todo };
  try {
    const value = await schema.validateAsync(newItem);
    database.collection("todos").add(value);
    res.json({ status: "OK" });
  } catch (error) {
    handleError(error, res);
  }
});

app.post("/items/delete", async (req, res) => {
  const itemId = req.body.id;

  try {
    const item = database.collection("todos").doc(itemId);
    item.delete();
    res.json({ status: "OK" });
  } catch (error) {
    handleError(error, res);
  }
});

app.post("/items/update", (req, res) => {
  const itemId = req.body.id;
  const newEdit = req.body.todo;
  try {
    database.collection("todos").doc(itemId).update({ todo: newEdit });
    res.json({ status: "OK" });
  } catch (error) {
    handleError(error, res);
  }
});

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
