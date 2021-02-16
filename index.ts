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
  res.json(items);
});

app.post("/items/add", (req, res) => {
  const newItem = { todo: req.body.todo };

  database.collection("todos").add(newItem);

  res.json({ status: "OK" });
});

app.post("/items/delete", (req, res) => {
  const itemId = req.body.id;
  // Get the index of the item
  const index = items.findIndex((item) => item.id === itemId);
  // Remove the item from the list
  items.splice(index, 1);
  // Return the new list
  res.json(items);
});

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
