import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;
app.get("/example", (req, res) =>
  res.send("Express + TypeScript Servera Wadap brothaaaasa ")
);

app.get("/", (req, res) => {
  res.json({
    message: "Yoyo",
  });
});

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
