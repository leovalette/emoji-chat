const WebSocket = require("ws");

const ws = new WebSocket("ws://localhost:8080");

ws.on("open", () => {
  console.log("Connection established");
});

ws.on("message", (data) => {
  console.log("Received message: ", data);
});

ws.on("close", () => {
  console.log("Connection closed");
});
