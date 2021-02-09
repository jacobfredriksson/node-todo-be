import express from "express";
import items from "./items";

const app = express();
const PORT = process.env.PORT || 8000;

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

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
