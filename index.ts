import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;
app.get("/example", (req, res) =>
  res.send("Express + TypeScript Servera Wadap brothaaaasa ")
);

app.post("/", (req, res) => {});

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
