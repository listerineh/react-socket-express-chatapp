import express from "express";
import morgan from "morgan";
import http from "http";
import cors from "cors";
import sqlite3 from "sqlite3";
import { Server as SocketServer } from "socket.io";
import { PORT } from "./config.js";

const app = express();
const server = http.createServer(app);

const db = new sqlite3.Database("database.sqlite");

db.serialize(function () {
  db.run(
    "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY , user TEXT, password TEXT)"
  );
});

const io = new SocketServer(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

app.use(cors());
app.use(morgan("dev"));

io.on("connection", (socket) => {
  var USER;

  socket.on("message", (message) => {
    const date = new Date();
    socket.broadcast.emit("message", {
      body: message,
      from: USER,
      time: `${date.getHours()}:${date.getMinutes()}`,
    });
  });

  socket.on("register", (user) => {
    db.run(
      `INSERT INTO users (user, password) VALUES ('${user.user}', '${user.password}')`
    );
  });

  socket.on("login", (user) => {
    db.all(
      `SELECT * FROM users WHERE user = '${user.user}' AND password = '${user.password}'`,
      function (err, rows) {
        if (rows.length > 0) {
          const date = new Date();
          USER = user.user;
          socket.emit("login", true);
          socket.emit("connection", USER);
          socket.broadcast.emit("message", {
            body: `User ${USER} connected!`,
            from: "server",
            time: `${date.getHours()}:${date.getMinutes()}`,
          });
        }
      }
    );

    socket.emit("login", false);
  });

  socket.on("disconnect", () => {
    const date = new Date();
    if (USER) {
      socket.broadcast.emit("message", {
        body: `User ${USER} disconnected!`,
        from: "server",
        time: `${date.getHours()}:${date.getMinutes()}`,
      });
    }
  });
});

server.listen(PORT);
console.log("Server on port " + PORT);
