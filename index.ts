import express from "express";

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
  res.json([
    { id: 1, todo: "do homework" },
    { id: 2, todo: "sleep" },
    { id: 3, todo: "watch movie" },
  ]);
});

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
