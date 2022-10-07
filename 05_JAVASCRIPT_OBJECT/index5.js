console.log("!");

function addNode() {
    // alert('버튼을 클릭하셨군요!') //html과 잘 연결됐는지 확인용
    // div1 id가져오기(기존)
    let div = document.getElementById('div1');
    // 요소 생성하기
    // createElement()

    let p = document.createElement('p'); //p태그 생성 //<p></p>
    //p태그에 글씨추가
    p.innerText = "버튼을 눌러 만들어진 p태그";
    // <p> 버튼을 눌러 만들어진 p태그</p>
    p.style.fontWeight = '700'; // 글씨 크기변경
    p.classList.add('append-p')
    //자식으로 p를 만들것임
    // div.append('1번 추가')
    // div.append(p,'2번 추가')
    div.appendChild(p);
    // div.append(p) : div.appendChild(p);와 동일
}

function removeNode(){
    // alert('삭제 버튼 클릭!') //html과 잘 연결됐는지 확인용
    let div = document.querySelector('#div1');
    let p = document.querySelector('#div1 > p');
    //앞에 부모 괄호안에 자식 을 지움
   // div.removeChild(p);
   // div.removeChild(p); = p.remove();
   p.remove();
}

//노드 생성/추가/삭제
// 1. 노드 생성
// createElement()

// 2. 노드 추가
// appendChild(): 노드 객체만 추가, 한 번에 한개
// append(): 노드 객체 or 텍스트 추가, 한번에 여러 개 가능 (더 많이 사용)

// 3. 노드 삭제
// 부모노드.removeChild(자식노드) : 부모요소의 자식노드를 삭제 
// 노드.remove() : "선택한 요소"를 삭제

//=======================

let ul = document.querySelector('ul');
let li = document.createElement('li');// <li></li> 만들기
li.innerText = '오렌지'  // <li>오렌지</li> 만들기

ul.append(li);
//함수안쓰고 바로 추가하기

//====================

let container = document.querySelector('.container');
let img = document.createElement('img'); //이미지 클래스생성
img.setAttribute('src', './image/beach1.jpg');// <img src="./image/beach1.jpg"></img>
img.setAttribute('alt', '강아지')
let title = document.createElement('div'); //<div> </div>
title.innerText = '해변입니다' // <div> 해변입니다.</div>

container.append(img);
container.append(title);


let test = document.querySelector('.test');
let img2 = document.createElement('img2');
img2.setAttribute('src', './image/beach1.jpg');
img2.setAttribute('width', '100');
let title2 = document.createElement('p');
title2.innerText = '해변2 입니다.'


test.append(img2);
test.append(title2);
