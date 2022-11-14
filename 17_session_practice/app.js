const express = require("express");
const app = express();
const PORT = 8000;

const session = require("express-session");
app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// cookie-parser
// 요청의 쿠키를 해석해서 req.cookies 객체로 만듦
// ex.name = hello 라는 쿠키를 보내면, req.cookies -> {name: 'hello}
// 유효기간이 지난 쿠키는 알아서 제거

// session({세션모듈_옵션})
// -secret : 세션 발급시 사용되는 키 ->반드시 필요한 옵션
// -resave: 매 요청마다 세션을 다시 저장할 것인지
// -saveUninitioalized: 초기값이 지정되지 않은 상태에서도 처음부터 세션 생성할지
// - secure: true 설정시 https에서만 세션을 주고 받음
// - name: 세션 쿠키명 (connect.sid 이지만 다른 이름 줄수도 있음)
app.use(
  session({
    secret: "secretKey",
    resave: false,
    saveUninitialized: true,
  })
);
//(임시) DB에 저장되어 있는 유저정보
const userInfo = { id: "a", pw: "1" };

app.get("/", (req, res) => {
  // 세션 설정
  // req.session.name = "홍길동";
  const user = req.session.user;
  console.log("req.session.user", req.session.user);
  // 세션 설정 x -> undefine
  // 세션 설정 o -> userInfo.id 값
  if (req.session.user === undefined) {
    res.render("index", { isLogin: false });
  } else {
    res.render("index", { isLogin: true, user: user });
  }

  // 세션 값이 있으면, index.ejs render{isLogin: true, user: req.session.user}
  // 세션 값이 없으면, index.ejs render{isLogin: false}

  // 응답 보냄
});

app.get("/logout", (req, res) => {
  const user = req.session.user;
  console.log("GET/logout | req.session.user >>", user);
  // 'a'
  // undefined

  if (user !== undefined) {
    // req.session.destroy(콜백)
    // 콜백 안에서 로그아웃 -> /리다이렉트
    req.session.destroy((err) => {
      if (err) {
        throw err;
      }

      console.log("세션을 지운후 | req.session.user >>", user); //undefined떠야 정상
      res.redirect("/");
      // res.redirect("/");
    });
  } else {
    // 유저가 브라우저에서 /logout 경로로 직접 접근
    // res.send()
    // -alert('잘못된 접근입니다.')
    // - / 경로로 이동
    res.send(
      `<script>
        alert('잘못된 경로입니다.');
        document.location.href ='/';
        </script>`
    );
  }
});
// POST /login
// 로그인 정보일치: 세션 설정
// 로그인 정보 불이리: /경로 이동

app.post("/login", (req, res) => {
  console.log(req.body); //{id: 'a', pw: '1'})
  console.log(req.body.id); //'a'

  if (req.body.id === userInfo.id && req.body.pw === userInfo.pw) {
    // 폼에 입력한 아이디 = 디비에서 찾은 아이디 &&
    // 폼에 입력한 비번 = 디비에서 찾은 비번
    // 로그인 정보일치한다면
    // -req.session.user 저장
    req.session.user = req.body.id; //세션 설정
    // -/리다이렉트
    res.redirect("/");
  } else {
    // 로그인정보 일치하지 않다면
    // -alert
    // -/경로로 이동
    res.send(
      `<script>
        alert('로그인 실패..');
        document.location.href ='/';
        </script>`
    );
    // res.send("로그인 실패!!");
  }
});

app.get("/login", (req, res) => {
  res.render("login");
});

// app.get("/sid", (req, res) => {
//   res.send(req.sessionID);
// });

// app.get("/destroy", (req, res) => {
//   req.session.destroy((err) => {
//     if (err) {
//       throw err;
//     }
//     res.send("세션 삭제 완료!");
//     // res.redirect("/");
//   });
// });

// 1. GET /: name 세션 설장
// 2. GET /name: name 값 확인
// 3. GET /destroy: 세션 삭제
// 4. GET /name: name 확인 불가능
// res.send('세선 삭제 완료');

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// req.session: "사용자별"로 해당 객체 안에 세션 정보 유지됨

// 세션쿠키 설정
// req.session.키 = 값

// 세션쿠키 사용
// req.session.키

// 세션 삭제
// req.session.destroy(콜백함수)
// - 콜백함수: 세션 삭제시 호출할 콜백함수
