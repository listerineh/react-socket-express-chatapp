import express from "express";
import morgan from "morgan";
import http from "http";
import cors from "cors";
import { Server as SocketServer } from "socket.io";
import { PORT } from "./config.js";

const app = express();
const server = http.createServer(app);

const io = new SocketServer(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

app.use(cors());
app.use(morgan("dev"));

io.on("connection", (socket) => {
  console.log("User " + socket.id + " connected!");

  socket.on("message", (message) => {
    const date = new Date();
    socket.broadcast.emit("message", {
      body: message,
      from: socket.id,
      time: `${date.getHours()}:${date.getMinutes()}`,
    });
  });
});

server.listen(PORT);
console.log("Server on port " + PORT);
