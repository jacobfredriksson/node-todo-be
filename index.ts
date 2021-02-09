import express from "express";

const app = express();
const PORT = 8000;
app.get("/example", (req, res) =>
  res.send("Express + TypeScript Servera Wadap brothaaaaa ")
);

app.post("/", (req, res) => {});

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
