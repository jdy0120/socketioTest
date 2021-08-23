import socket, { Socket } from "socket.io";

export const socketIo = (socket: Socket) => {
  console.log("유저가 들어왔다");

  socket.on("disconnect", () => {
    console.log("유저가 나갔다.");
  });

  socket.on("chat-msg", (msg) => {
    console.log(msg);
  });
};
