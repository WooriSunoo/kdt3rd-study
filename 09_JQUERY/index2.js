function getValue() {
  let value = $("input1").value();
  alert(value);
}

function setValue() {
  $(".input1").val("설정 완료");
}

//css()
function changeCssJs() {
  let span = document.querySelector(".span1");
  span.style = "font-size: 20px; color: red;";
}

function changeCssJquery() {
  $("span").css("font-size", "40px");
  $("span").css("color", "blue");
  //복합 설정
  // $('span').css({
  //     'font-size', '40px',
  //     'color', 'blue'
  // }
}

function getCssJquery() {
  console.log($(".span1").css("color"));
}

// arrt()
function changeAttrJs() {
  let a = document.querySelector("a");
  a.setAttribute("href", "http://www/naver.com");
}

function changeAttrJquery() {
  $("a").attr("href", "http://www.daum.net");
}

//text()
function changeTextJs() {
  let p = document.querySelector(".p-text");
  p.textContent = "js로 바꿨습니다"; //p.innerText
}

function changeTextJquery() {
  $(".p-text").text("jquery로 바꿨습니다.");
}

//html()
function changeHtmlJs() {
  let p = document.querySelector(".p-html");
  p.innerHTML = "<h1>js로 바꿨습니다</h1>"; //p.innerhtml
}

function changeHtmlJquery() {
  $(".p-html").html("<h3>jquery로 바꿨습니다.</h3>");
}

//요소 추가하기
//append()
function appendJs() {
  let ul = document.querySelector(".colors");
  let li = document.createElement("li"); // <li></li>
  li.innerText = "마지막으로 자식으로 추가된 js";
  ul.append(li);
}

function appendJquery() {
  $(".colors").append("<li>마지막 자식으로 추가된 jquery");
}
//prepend()
function prependJs() {
  let ul = document.querySelector(".colors");
  let li = document.createElement("li"); // <li></li>
  li.innerText = "첫 자식으로 추가된 js";
  ul.prepend(li);
}

function prependJquery() {
  //   $(".colors").prepend("<li>첫 자식으로 추가된 jquery");
  let ul = $(".colors");
  ul.prepend("<li> 첫 자식으로 추가된jquery");
}
//before()
function beforeJs() {
  let green = document.querySelector(".green");
  let li = document.createElement("li"); // <li></li>
  li.innerText = "다음 형제요소로 추가된 js";
  green.before(li);
}

function beforeJquery() {
  $(".green").before("<li>다음 형제요소로 추가된 jquery");
}
//after()
function afterJs() {
  let green = document.querySelector(".green");
  let li = document.createElement("li"); // <li></li>
  li.innerText = "다음 형제요소로 추가된 js";
  green.after(li);
}

function afterJquery() {
  $(".green").after("<li>다음 형제요소로 추가된 jquery");
}

//요소 삭제하기
//remove()
function removeJs() {
  document.querySelector("#li2").remove();
}

function removeJquery() {
  $("#li2").remove();
}

//empty()
function emptyJs() {
  //   document.querySelector("ul.nums").empty();
  // js는 empty() 존재하지 않음!!. .innerHTML 속성 사용
  document.querySelector("ul.nums").innerHTML = "";
}
//자바스크립트에 empty메서드없음

function emptyJquery() {
  $("ul.nums").empty();
}

// 요소 탐색하기
function findParent() {
  console.log($(".child2").parent());
}

function findParents() {
  console.log($(".child2").parents());
}

function findNext() {
  console.log($(".child2").next());
}

function findPrev() {
  console.log($(".child2").prev());
}

function findChildren() {
  console.log($(".parent").children());
}

//클래스 조작하기
function addClass() {
  $("#hi").addClass("fs-50");
}
function removeClass() {
  $("#hi").removeClass("fs-50");
}
function hasClass() {
  console.log($("#hi").hasClass("fs-50"));
}
function toggleClass() {
  $("#hi").toggleClass("bg-pink");
}
