import http from "http";
import { Server } from "socket.io";
import App from "./app/App";

const express = App;

const server = http.createServer(express);
const socket = new Server(server);

socket.on("connection", () => {
  console.log("User Connect");
});

server.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
})