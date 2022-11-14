const express = require("express");
const cookieParser = require("cookie-parser");
// cookie-parser
// 요청의 쿠키를 해석해서 req.cookies 객체로 만듦
// ex.name = hello 라는 쿠키를 보내면, req.cookies -> {name: 'hello}
// 유효기간이 지난 쿠키는 알아서 제거
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser()); //req.cookies 가능해짐

// res.cookie(키, 값, 옵션)
// : 쿠키를 "설정"

// res.clearCookie(키, 값, 옵션)
// : 쿠키를 "삭제"

// TODO: 라우팅 분리
// 기본 주소: localhost:PORT/user <- 주의!!
// const userRouter = require("./routes/user");
// app.use("/user", userRouter);
// const indexRouter = require("./routes"); // index는 생략 가능!
// app.use("/", indexRouter); // localhost:PORT/ 경로를 기본으로 ./routes/index.js 파일에 선언한 대로 동작

const cookieConfig = {
  // 옵셔 속성들..
  httpOnly: true, //웹 서버를 통해서만 쿠키 접근 가능(js에서 접근 불가능)
  //   maxAge: 24 * 60 * 60 * 1000, //1min: 유효 시간(단위: 밀리초)
  maxAge: 10 * 1000,
  //expires: 만료 날짜 설정
  // secure: https 에서만 쿠키 접근
  // signed: 쿠키 암호화
};
// res.cookie()
app.get("/", (req, res) => {
  // req.cookies.popup
  // 쿠키 설정시; 'hide'
  // 쿠키 미설정시: ''
  res.render("index", { popup: req.cookies.popup });
});
// TODO: 404 에러 처리
// app.get("*", (req, res) => {
//   res.render("404");
// });

app.get("/setCookie", (req, res) => {
  res.cookie("myKey1", "myValue1", cookieConfig); //쿠키설정
  res.send("set cookie"); //응답을 보냅
});
app.get("/getCookie", (req, res) => {
  res.send(req.cookies); //쿠키해석 (읽기)
});
app.get("/clearCookie", (req, res) => {
  res.clearCookie("myKey1", "myValue1", cookieConfig); //쿠키 삭제
  res.send("clear cookie!!!"); //쿠키삭제 응답을 보냄
});

app.post("/setCookie", (req, res) => {
  //쿠키설정
  //   popup 쿠키의값을 설정해서
  res.cookie("popup", "hide", cookieConfig); //쿠키설정 응답보내는거 아님
  // 응답'쿠키 설정 성공!'메세지를 응답으로 보냄
  res.send("쿠키 설정 성공!!!"); //쿠키삭제 응답을 보냄
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
