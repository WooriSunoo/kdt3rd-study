console.log("Connect");

//document 객체
//속성

console.log(document.documentElement) //html태그 반화
console.log(document.head); //head 태그 반환
console.log(document.body); //body태그 반환

console.log(document.URL); //웨베이지 전체 url반화
console.log(document.domain); //url에서 도메인 반환


// url: https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EC%82%AC%EA%B3%BC

//도메인: https://www.naver.com/

//html 요소 선택하는 방법
// = dom 요소 선택하기 (DOM API)

//노드 객체 가져오기
//1. getElementById(아이디명): 아이디 이름으로 요소 가져오기
// id는 유일하므로 속도가 가장 빠름
console.log(document.getElementById('first'))
console.log(document.getElementById('second'))
console.log(document.getElementById('third'))
console.log(document.getElementById('fourth'))
console.log(document.getElementById('fifth'))

// 2. getElementsByClassName(클래스명): 클래스 이름으로 요소 가져옴
console.log(document.getElementsByClassName('korean'));
console.log(document.getElementsByClassName('bunsik'));
console.log(document.getElementsByClassName('dessert'));

//배열.. 여러개라
console.log(document.getElementsByClassName('korean')[0]);

// 3. getElementsByTagName(태그명): 태그 이름으로 요소 가져옴

console.log(document.getElementsByTagName('h1'));
console.log(document.getElementsByTagName('h2'));
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByTagName('li')[2]);

// 4. getElementsByName(name속성값):
console.log(document.getElementsByName('userid'))
console.log(document.getElementsByName('userid')[0])
console.log(document.getElementsByName('userid')[0].value)
//value에 있는 user값 가져옴

// 돈까스

// "css 선택자"를 이용해 노드 객체 가져오기
// css라 클래스 이름이니까 앞에 . 붙임: .korean
// 5. querySelector(css셀렉터) : 일치하는 첫번째 요소를 가져옴
// 첫번째 것 하나만 가져옴
console.log(document.querySelector('.korean'));
console.log(document.querySelector('.bunsik'));
console.log(document.querySelector('.dessert'));
console.log(document.querySelector('input[name="userid"]'))
// 밖이 ''면 안은 ""로, 밖이 ""면 안은 ''로 

// 6. querySelectorAll(css셀렉터): 일치하는 "모든 요소"를 배열로 가져옴
console.log(document. querySelectorAll('.korean'));
console.log(document. querySelectorAll('.bunsik'));
console.log(document. querySelectorAll('.dessert'));
console.log(document. querySelectorAll('.korean')[0]);
//여러개 배열..인덱스로 가져오기 가능
// #third 에 만약 hover있으면 #third:hover가능
console.log(document.querySelectorAll('.launch-list #third'))

console.log(document.querySelectorAll('.launch-list .korean'))
