import express from "express";
import morgan from "morgan";
import http from "http";
import cors from "cors";
import { Server as SocketServer } from "socket.io";
import { PORT } from "./config.js";

const app = express();
const server = http.createServer(app);

const io = new SocketServer(server);

app.use(morgan("dev"));
app.listen(PORT);
console.log("Server on port " + PORT);
