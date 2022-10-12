console.log(document); //js
console.log($(document)); // jquery

//1. Load Event
// jquery
$(document).ready(function () {
  console.log("ready - 문서의 dom 트리가 완성되면 실행");
});

$(function () {
  console.log("안녕?");
});

//js
document.addEventListener("DOMContentLoaded", function () {
  console.log("domcontentloaded - 문서의 dom 트리가 완성되면 실행");
});

//2. Mouse Event
$(".p-msg").click(function () {
  $(".p-msg").css("color", "red");
});

//jquery는 배열형태라도 다 가지고옴
// console.log($('.num'));
// $('.num').click(function(){
//     $('.num').css('color', 'blue')
// })

//jquery는 배열형태라도 다 가지고옴
// console.log($(".num")); //length: 4
// $(".num").click(function () {
//   // $('.num').css('color', 'blue')
//   $(this).css("color", "blue");
//   console.log($(this)); //클릭이 발생하는 객체..헷갈리면 찍어보기
// });

// js
const nums = document.querySelectorAll(".num");
for (let i = 0; i < nums.length; i++) {
  nums[i].addEventListener("click", function () {
    // console.log(nums[i]);
    this.style.color = "blue";
    console.log(this);
  });
}

//mouseover(): 요소에 마우스 올렸을 때

$(".numbers").mouseover(function () {
  $(this).css("background-color", "skyblue");
  $(this).append("<div>.mouseover() called!!!</div>");
});

// hover(): 마우스 올렸을 때, 떼었을 때
// hover(inFunc, outFunc)
$(".div-hover").hover(
  function () {
    $(this).addClass("hover");
  },
  function () {
    $(this).removeClass("hover");
  }
);

//scroll(): 스크롤할 떼

console.log(window); //js
console.log($(window)); //jquery

$(window).scroll(function () {
  console.log("Scroll!!!");
});

//3. Key Event

$(".input-key").keydown(function (e) {
  console.log(e);
  if (e.code == "ArrowUp") {
    console.log("Up");
  } else if (e.code == "ArrowDown") {
    console.log("Down");
  } else {
    console.log("others");
  }
});

//4. Form Event
$("#todo-form").submit(function (e) {
  e.preventDefault(); //기본 동작 막기
  //   console.log("submit!!");

  const todo = $('input[name="todo"]').val(); //input값 저장
  $(".todos").append(`<li>${todo}</li>`); // ul에 li추가
  $('input[name="todo"]').val(""); // input초기화
});
