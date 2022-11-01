const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routing(경로 설정)
app.get("/", function (req, res) {
  res.render("practce", { title: "동적 폼을 배워보자!!" });
});

const realId = "test";
const realPw = "test";

// 2. axios
// GET /axios
app.get("/axios", function (req, res) {
  console.log(req.query);
  // 받아온값 터미널에
  res.send(req.query);
});

app.post("/axios", function (req, res) {
  console.log(req.body);
  // 받아온값 터미널에
  let idtrue = req.body.id2 == realId;
  let pwtrue = req.body.pw == realPw;
  res.send({
    check: idtrue && pwtrue,
  });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
