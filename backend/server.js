const express = require("express");
const app = express();
const PORT = 5002;

app.use(express.json());

// API Route
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Express Backend!" });
});

app.get("/api/info", (req, res) => {
  res.json({ message: "INFO from Express Backend!" });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
