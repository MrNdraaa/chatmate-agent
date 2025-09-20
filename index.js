import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Basic Chat Agent Endpoint
app.get("/", (req, res) => {
  res.json({
    agent: "ChatMate",
    type: "Social & Chat",
    message: "Hello! I'm your Recall Network social & chat agent 🚀"
  });
});

app.listen(PORT, () => {
  console.log(`ChatMate Agent running on port ${PORT}`);
});
