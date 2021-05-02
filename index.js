require("dotenv").config();
const express = require("express");
const socket = require("socket.io");
const cors = require("cors");
const http = require("http");
const db = require("./models");
const Routes = require("./routes");
const port = process.env.PORT || 8080;

const app = express();
const httpServer = http.createServer(app);
const io = socket(httpServer, {
  cors: {
    origin: "*",
    credentials: true,
  },
});

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    massage: "server running",
  });
});

app.post("/send", (req, res) => {
  res.json({
    dataDiterima: req.body,
  });
});

app.use("/avatar", express.static("./upload"));

// Sync Database
db.sequelize.sync().then(
  () => console.log(`[DATABASES] Connected`),
  (err) => console.log(`[DATABASES] Failed To Connect (${err})`)
);

app.use("/v1", Routes);

app.use("*", (req, res) => {
  if (req.params["0"].match("/v1")) {
    res.status(405).json({
      status: false,
      message: "Method Not Allowed",
      data: null,
    });
  }
});

io.on("connection", (socket) => {
  const users = db.user;
  socket.join(`user:${socket.handshake.query.sender}`);
  users.update({ socketId: socket.id }, { where: { userId: socket.handshake.query.sender } });
  socket.on("sendMsg", (msg) => {
    socket.to(`user:${msg.to}`).emit("recMsg", {
      to: msg.to,
      from: socket.handshake.query.sender,
      messageBody: msg.message,
      time: `${new Date().toDateString().split(" ")[0]}, ${
        new Date().getHours() < 10 ? `0${new Date().getHours()}` : new Date().getHours()
      }:${new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : new Date().getMinutes()}`,
    });
    socket.to(`user:${msg.to}`).emit("notif", {
      name: socket.handshake.query.name,
      from: socket.handshake.query.sender,
    });
  });
  socket.on("disconnect", () => {
    users.update({ socketId: `` }, { where: { userId: socket.handshake.query.sender } });
  });
});

httpServer.listen(port, () => {
  console.log(`Server Running on ${port}`);
});
