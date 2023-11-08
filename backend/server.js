const WebSocket = require("ws");
const emoji = require("node-emoji");

const server = new WebSocket.Server({ port: 8080 });

server.on("connection", (socket) => {
  console.log("Connection established");

  const sendRandomEmoji = () => {
    const randomEmoji = emoji.random().emoji;
    socket.send(randomEmoji);
  };

  const emojiInterval = setInterval(sendRandomEmoji, 2000);

  socket.on("close", () => {
    console.log("Connection closed");
    clearInterval(emojiInterval);
  });
});
