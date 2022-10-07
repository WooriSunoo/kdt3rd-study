console.log('!!');

//반복문
// - for 문
// - while문

// for 문

/* for 문
 for ( 초기값 ;조건식  ; 증감값 ){
    //반복할 코드
 }
 증감<후위연산자

 만약 n=10

 n++ 은
 n=n+1 과 같음
 수행후 n=11

 n-- 은
 n=n=1 과 같음
 수행후 n=9


 */

 // i++
 // i = i + 1

 // i--
 // i = i - 1

 //case1. 0~4출력

 for (let i =0; i < 5; i++){  //i의 첫값은 0 i:0 i++해서 i:1 i++ i:2 ...5보다 작을때까지 5(false)
    console.log(i); //0 1 2 3 4
 }

 console.log('반복문 끝1');


 //case 1~5출력(1)
 for (let i =1; i < 6; i++){  
    console.log(i); //1 2 3 4 5
 }

 console.log('반복문 끝2');


  //case 1~5출력(2)
  for (let i =0; i < 5; i++){  
    console.log(i+1); //1 2 3 4 5
 }

 console.log('반복문 끝3');

   //case 1~5출력(3)
   for (let i =1; i <= 5; i++){  
    console.log(i); //1 2 3 4 5
 }

 console.log('반복문 끝4');

 //case3. 5부터 1까지 출력
 for(let i = 5; i > 0 ; i--){ //i:4 3 2 1 0(false)
    console.log(i); //5 4 3 2 1

 }
 console.log('반복문 끝5');

 //case4. 1부터 10까지 출력(단, 짝수만)
 //ver1. 반복 1부터 10까지 + 2로 나눈 나머지가 0일 때만 출력
 //반복문 + 조건문

 for (let i = 1; i <=10 ; i++){
    if ( i %2 === 0){
    console.log(i);
    }
 }
 console.log('반복문 끝6');

 //ver2. 증감값 변경

 for(let i = 2; i <= 10; i = i + 2){
    console.log(i);
 }
 console.log('반복문 끝7');

 //퀴즈)1부터 10까지 합 구하기

 let sum = 0; //합을 저장할 변수 생성
 for (let i= 1; i <=5; i++){ //i: 1 2 3 4 5
    sum =sum +i;
    //sum = 0 + 1 = 1
    //sum = 1 + 2 = 3
    //sum = 3 + 3 = 6
    //sum = 6 + 4 = 10
    //sum = 10 + 5 = 15
 }
 console.log(`1~10까지 모두 더한 값: ${sum}`) //55

 //퀴즈 )1부터 10까지 짝수의 합 구하기

 let sum2 = 0;
for(let i = 1; i <=10; i++){ //i: 1 2
    if( i % 2 === 0){
        sum2 = sum2 + i;
        //sum = 0+2
    }
}
console.log(`1부터 10까지 짝수의 합1: ${sum2}`) //

let sum3 = 0;
for(let i = 2; i <=10; i=i+2){ 
        sum3 = sum3 + i;
}
console.log(`1부터 10까지 짝수의 합2: ${sum3}`) //30

//#############################################3
//while 문
/*
while (조건식){
    //반복할 코드
}
=> 조건식 만족; 블럭({}) 내부 코드 실행
=> 내부 코드 실행 완료 -> 조건식으로 돌아가서 다시 반복 여부 결정
//if비슷...
 - if문; 조건식 true; 블럭 내부 코드 1번 실행
 - while문: 조건식이 true; "계속" 반복
=> 조건식 false; 블럭을 빠져나옴 반복이 종료
*/


//case1. 1~5 반복

var n = 1; //반복 변수 초기값 설정
while(n <= 5){ //조건식  n =1 true n=2 true n=3 true n=4 true n=5 true
    console.log(n); //n:1 2 3 4 5
    n = n + 1; //n++ //증감값

    //n = 1+1 =2
    //n = 2+1=3
    //n = 3+1=4
    //n = 4+1=5
    //n = 5+1=6
}

console.log('반복문 끝');

//퀴즈)
//case2. 9부터 4까지 while 문으로 반복
var n = 9; //초기값
while(n >= 4){
    console.log(n);
    n = n - 1;
}
console.log('반복문 끝');



// Case3. 1부터 10까지 짝수 출력
// ver1
n = 1; 
while (n <= 10) { // n: 1 ~ 10
	if (n % 2 == 0) {
		console.log(n);
	}
	n = n + 1;
}
console.log('반복문 끝');

// ver2
n = 2;
while (n <= 10) { // n: 2, 4, 6, 8, 10
	console.log(n);
	n = n + 2;
}
console.log('반복문 끝');





// Case4. 10부터 1까지 홀수 출력

n = 10; 
while (n >=1) { // n: 1 ~ 10
	if (n % 2 == 1) {
		console.log(n);
	}
	n = n - 1;
}
console.log('반복문 끝');

// ver2
n = 9;
while (n >= 1) { // n: 2, 4, 6, 8, 10
	console.log(n);
	n = n - 2;
}
console.log('반복문 끝');

//=====================================
//무한 루프
// : 반복문에서 조건식의 결과가 항상 참이되어 반복문을 탈출하지 못하는 상태
//의도적으로 무한루프를 만들어서 특정 조건이 만족될 때까지 반복하여서 코드를 작성하기도 함
/*

while(true) {
    ...
    //탈출 조건을 만들기
}
*/

//조건문 등을 이용해 탈출 조건을 만들어 주고
//break 키워드 -> 블록({})을 빠져나옴

//let go = confirm('계속 진행할까요?');
//console.log(go);
// [확인] 버튼 누르면 :true 값
// [취소] 버튼 누르면 : false 값

/*var count = 0;
while (true){ //무한루프
    if(confirm("계속 진행하시겠습니까")===true){
        alert(`${count}번째 반복입니다!`);
        count = count +1;
    }else { //[취소] false 반환 
        break;
    }
}
//14: 3317
console.log('무한루프 탈출 성공!');
*/


 //퀴즈 )1부터 10까지 짝수의 합 구하기(1)

console.log('****2단****')
for(let i = 1; i <=10; i++){ 
    console.log(`2 * ${i} = ${2*i}`);
}
console.log('****3단****')
for(let i = 1; i <=10; i++){ 
    console.log(`3 * ${i} = ${2*i}`);
}

//...


 //퀴즈 )1부터 10까지 짝수의 합 구하기(1)
for (let dan = 2; dan <=9; dan++){
    for(let i = 1; i <=9; i++){ 
        console.log(`${dan} * ${i} = ${dan*i}`);
    }
}