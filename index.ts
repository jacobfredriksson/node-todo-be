import express from "express";
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

app.post("/items", (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  console.log({ items });
});

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
