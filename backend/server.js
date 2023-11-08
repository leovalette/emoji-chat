const WebSocket = require("ws");
const emoji = require("node-emoji");

const server = new WebSocket.Server({ port: 8080 });

server.on("connection", (socket) => {
  console.log("Connection established");

  const authors = [
    { name: "LVA", color: "#FF00FF" },
    { name: "Léo", color: "#0000FF" },
    { name: "Olé", color: "#FF0000" },
    { name: "Definitly not Léo", color: "#C0C0C0" },
    { name: "Oél", color: "#00FFFF" },
  ];

  const sendRandomEmoji = () => {
    const authorIndex = Math.floor(Math.random() * authors.length);
    socket.send(
      JSON.stringify({
        message:
          emoji.random().emoji +
          " " +
          emoji.random().emoji +
          " " +
          emoji.random().emoji +
          " " +
          emoji.random().emoji +
          " " +
          emoji.random().emoji,
        author: authors[authorIndex].name,
        authorColor: authors[authorIndex].color,
      })
    );
  };

  const emojiInterval = setInterval(sendRandomEmoji, 5000);

  socket.on("close", () => {
    console.log("Connection closed");
    clearInterval(emojiInterval);
  });
});
