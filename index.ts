import express from "express";
import database from "./firebase";
import items from "./items";

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
      let result: object[] = [];

      snapshot.forEach((doc) => {
        const document = { id: doc.id, todo: doc.data().todo };
        result.push(document);
      });

      res.json(result);
    });
});

app.post("/items/add", (req, res) => {
  const newItem = { todo: req.body.todo };

  database.collection("todos").add(newItem);

  res.json({ status: "OK" });
});

app.post("/items/delete", (req, res) => {
  const itemId = req.body.id;
  database.collection("todos").doc(itemId).delete();
  res.json({ status: "OK" });
});

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
