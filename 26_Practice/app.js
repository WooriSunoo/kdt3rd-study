const express = require("express");
const app = express();
const PORT = 8000;

// views 설정
app.set("view engine", "ejs");
// Middleware (미들웨어) 설정
// : 요청(req)과 응답(res)의 중간에서 작업
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // json 형태로 데이터를 전달받음

// Routing - 경로 설정
// - req(request) : 요청 (클라이언트 -> 서버)
// - res(response) : 응답 (서버 -> 클라이언트)
app.get("/", function (req, res) {
  // GET / (http://localhost:PORT)
  //   res.render("index"); // views/index.ejs 파일을 찾아서 클라이언트에게 "응답"
  res.render("index", { title: "실습 26. POST로 정보 받기" });
});
app.post("/getForm", function (req, res) {
  // GET요청은 req.query 객체에 폼 정보가 전달
  console.log(req.body);
  //   res.send("get 요청 응답 성공");
  res.render("result", {
    title: "실습27. post로 정보받기",
    userInfo: req.body,
  });
});

// app.post("/postForm", function (req, res) {
//   // POST 요청은 req.body 객체에 폼 정보가 전달
//   console.log(req.body);
//   //   res.send("Post 요청 응답 성공");
//   res.render("result", { title: "POST 요청 성공", userInfo: req.body });
// });

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
