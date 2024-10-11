// http 모듈로 웹 서버 생성

const { log } = require("console");
const http = require("http");

// fs 모듈 사용 (file system)
const fs = require("fs");
const server = http.createServer(function (req, res) {
  try {
    const data = fs.readFileSync("./404.html");
    res.writeHead(200, { "content-type": "text/html; charset=UTF-8" });
    res.write(data);
    res.end();
  } catch (error) {
    // 실습 : 404.html 만들어서 해당 html 파일 응답으로 보내기!
  }
});

const PORT = 8000;

// request 이벤트 : 클라이언트 요청
server.on("request", function (req, res) {
  console.log("request 이벤트 발생!", req.res);
});

// connection 이벤트 : 클라이언트가 접속했을 때 발생
server.on("connection", function (req, res) {
  console.log("connection 이벤트 발생!");
});

server.listen(PORT, function () {
  console.log(`server listening on ${PORT}`);
});
