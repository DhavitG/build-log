import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

interface User {
  socket: WebSocket;
  room: string;
}

let allSockets: User[] = [];

wss.on("connection", function (socket) {
  socket.on("message", (message) => {
    const parsedMessage = JSON.parse(message as any);
    if (parsedMessage.type === "join") {
      allSockets.push({
        socket,
        room: parsedMessage.payload.roomId,
      });
    }

    if (parsedMessage.type === "chat") {
      const currentUserRoom = allSockets.find((x) => x.socket === socket)?.room;

      for (let i = 0; i < allSockets.length; i++) {
        if (allSockets[i]?.room === currentUserRoom) {
          allSockets[i]?.socket.send(parsedMessage.payload.message);
        }
      }
    }
  });

  socket.on("close", () => {
    allSockets = allSockets.filter((user) => user.socket !== socket);
  });
});
