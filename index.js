import express from "express";

const app = express();

// Basic Chat Agent Endpoint
app.get("/", (req, res) => {
  res.json({
    agent: "ChatMate",
    type: "Social & Chat",
    message: "Hello! I'm your Recall Network social & chat agent 🚀"
  });
});

export default app;
