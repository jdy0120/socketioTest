import { Server, Socket } from "socket.io";

import express from "express";
import http from "http";

const app = express();
const server = http.createServer(app);

const io = new Server(server);

// 클라이언트가 접속했을 경우
io.on("connection", (socket: Socket) => {
  console.log("a user connected");
  socket.on("message", (msg) => {
    console.log(msg);

    socket.emit("Welcome", "Hi Client, I'm Server");
  });

  socket.on("disconnect", () => {
    console.log("disconnected");
  });
});

server.listen(5000, () => {
  console.log("listening on * 5000");
});
