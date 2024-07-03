const express = require("express");
const app = express();
let fs = require("fs");
const path = require("path");
var WebSocket = require("ws");
var WebSocketServer = WebSocket.Server,
  wss = new WebSocketServer({ port: 5004 });

let data = fs.readFileSync("./route.json");
//console.log(data.toString());
wss.on("connection", (ws, request) => {
  if (ws.readyState === ws.OPEN) {
    console.log("접속");
    ws.send(data);
  }
});

const port = 5000;
app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port} 자율운항 항로 정보 시뮬레이터`
  );
});
