const express = require("express");
const app = express();
let fs = require("fs");
const path = require("path");
var WebSocket = require("ws");
// var WebSocketServer = WebSocket.Server,
//   wss = new WebSocketServer({ port: 9000 });

let ws = new WebSocket.Server({ port: 9001 });
ws.on("connection", (wss, request) => {
  console.log("접속함");

  wss.on("message", function (message) {
    console.log(message.toString());
    //wwsss.send(message);
    if (wss.readyState == wss.OPEN) {
      //wss.send(message);
      ws.clients.forEach(function (client) {
        client.send(message);
      });
    }
  });

  wss.on("close", () => {
    console.log(" close server");
  });
});

console.log(`Example app listening at ws://localhost:9001 일반선박 시뮬레이터`);
// const port = 9000;
// app.listen(port, () => {
//   console.log(
//     `Example app listening at http://localhost:${port} 일반선박 시뮬레이터`
//   );
// });
