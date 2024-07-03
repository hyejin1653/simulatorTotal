const express = require("express");
const app = express();
let fs = require("fs");
const path = require("path");
var WebSocket = require("ws");
// var WebSocketServer = WebSocket.Server,
//   wss = new WebSocketServer({ port: 9000 });

let wss = new WebSocket("ws://localhost:9001");

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
}

const dataBuffer = fs.readFileSync("./ais.json");
const ais = JSON.parse(dataBuffer.toString().trim());
console.log(ais);
wss.onopen = () => {
  console.log("websocket Open");

  if (wss.readyState === wss.OPEN) {
    console.log("접속");
    // for (let row of ais) {
    //   console.log(JSON.stringify(row));
    //   wss.send(JSON.stringify(row));
    //   sleep(100);
    // }

    for (let i = 0; i < ais.length; ) {
      console.log(JSON.stringify(ais[i]));
      wss.send(JSON.stringify(ais[i]));

      if (i + 1 == ais.length) {
        i = 0;
        console.log("endendendendendendendendendendendendendendendendendend");
      } else {
        i++;
      }
      sleep(100);
    }
  }
};

console.log(
  `Example app listening at ws://localhost:9001 client 일반선박 시뮬레이터`
);
// const port = 9000;
// app.listen(port, () => {
//   console.log(
//     `Example app listening at http://localhost:${port} 일반선박 시뮬레이터`
//   );
// });
