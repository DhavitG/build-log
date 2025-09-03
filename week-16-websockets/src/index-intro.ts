import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

let allSockets: WebSocket[] = [];

// event handler
wss.on("connection", function (socket) {
  allSockets.push(socket);
  console.log("user connected #");
  // socket.send("hello");
  // setInterval(() => {
  //   socket.send("The current price of btc is $" + Math.random() * 150000);
  // }, 500);

  // event handler for this particular socket, every user has a different socket just like every http request has a different req, res objects
  socket.on("message", (message) => {
    console.log("message received: " + message.toString());
    allSockets.forEach((el) => {
      el.send(message.toString() + ": sent from the server");
    });
  });

  socket.on("close", () => {
    allSockets = allSockets.filter((x) => x !== socket);
  });
});
