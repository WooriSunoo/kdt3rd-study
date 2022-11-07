const User = require("../model/User");
console.log(User);

exports.main = (req, res) => {
  res.render("index", { title: "동적 폼실습" });
};

// GET /user
exports.practice30 = (req, res) => {
  //   console.log(User.userInfo());
  if (realId === req.body.userId && realPw === req.body.userPw) {
    res.send({ userInfo: req.body, isSuccess: true });
  } else {
    res.send({ isSuccess: false });
  }
  // 진짜 아이디/비번 vs. 사용자가 입력한 아이디/비번
  // res.send(req.body);
};
