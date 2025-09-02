import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

// event handler
wss.on("connection", function (socket) {
  console.log("user connected");
  // socket.send("hello");
  // setInterval(() => {
  //   socket.send("The current price of btc is $" + Math.random() * 150000);
  // }, 500);

  socket.on("message", (e) => {
    if (e.toString() === "ping") {
      socket.send("pong");
    }
  });
});
