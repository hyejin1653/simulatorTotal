const express = require("express");
const app = express();
const { WebSocket } = require("ws");

app.listen(30001, () => {
  console.log("Server is open at port:30001");
});

const webSocket = new WebSocket("ws://155.155.4.222:7001");
webSocket.onopen = () => {
  console.log("연결완료");
};

webSocket.onmessage = (event) => {
  console.log("데이터 들어옴");
  //let str = Encoding.Default.GetString(event.data);
  console.log(`서버 웹소켓에게 받은 데이터: ${event.data}`);
};

webSocket.onclose = function () {
  console.log("서버 웹소켓 연결 종료");
};

// 2-4) 에러 발생 이벤트 처리
webSocket.onerror = function (event) {
  console.log("연결오류");
  console.log(event);
};
