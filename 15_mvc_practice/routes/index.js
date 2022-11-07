const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

// "경로 설정" = 라우팅
// 기본 경로: localhost:PORT/user

// GET / => localhost:PORT/user/
router.get("/", controller.main);

router.get("/practice30", controller.practice30);

module.exports = router;
