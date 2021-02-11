import express from "express";
import { v4 as uuidv4 } from "uuid";
import items from "./items";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get("/example", (req, res) =>
  res.send("Express + TypeScript Servera Wadap brothaaaasa ")
);

app.get("/", (req, res) => {
  res.json({
    message: "Yoyo",
  });
});

app.get("/items", (req, res) => {
  res.json(items);
});

app.post("/items/add", (req, res) => {
  const newItem = { id: uuidv4(), todo: req.body.todo };
  items.push(newItem);
  console.log({ items });
});

app.post("/items/delete", (req, res) => {
  const itemId = req.body.id;
  console.log({ itemId });
  const index = items.findIndex((item) => item.id === itemId);
  items.splice(index, 1);
  console.log(items);
});

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
