const express = require("express");
const app = express();
const WebSocket = require("ws");
const WebSocketServer = WebSocket.Server,
  wss = new WebSocketServer({ port: 3501 });

wss.on("connection", (ws, request) => {
  console.log("새로운 클라이언트");

  if (ws.readyState === ws.OPEN) {
    ws.on("message", (message, request) => {
      let meg = JSON.parse(message);
      console.log(meg);
    });
  }
});

const port = 3500;
app.listen(port, () => {
  console.log(`ake message server at http://localhost:${port}`);
  //selectData();
});
