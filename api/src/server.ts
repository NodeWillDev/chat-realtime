import http from "http";
import { Server } from "socket.io";
import App from "./app/App";
import IMessage from "./interfaces/IMessage";
import Messages from "./messages/Messages";

const express = App;

const server = http.createServer(express);
const socket_server = new Server(server, {
  cors: {
    origin: '*'
  }
});

const messages = new Messages();

socket_server.on("connection", socket => {  


  socket.on("sendMessage", (message: IMessage) => {
    socket_server.emit("sendMessage", message);
    messages.addMessage(message);
  });

  socket.emit("chatBackup", messages.getMessages());

  socket.on("disconnect", () => {
    console.log("User Disconected");
  });
});

server.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
})