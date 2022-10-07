console.log('Connect');

/*
자료형
 - 기본형(primitive)
 - 객체(object)
   - 배열
   - 객체 리터럴(객체)

*/

//1. 배열

const arr1 = ['red', 'orange', 'yellow', 1, 2, 3];
console.log(arr1);

/*
(6) ['red', 'orange', 'yellow', 1, 2, 3]
0: "red"
1: "orange"
2: "yellow"
3: 1
4: 2
5: 3
length: 6
[[Prototype]]: Array(0)

*/
const arr2 = new Array('red', 'orange', 'yellow', 1, 2, 3); // 배열 생성방법2
console.log(typeof arr1);
console.log(typeof(arr1)); //typeof: object 
//console.log(arr2);

//배열 원소 (요소) 읽기
//인텍스: 배열 원소 위치값
// 숫자는 0부터 시작 주의
let str = 'Green'
console.log(str[0]);
console.log(arr1[0]);
console.log(arr1[5]);

//배열 원소값 변경
//('red', 'orange', 'yellow', 1, 2, 3) => ('red', 'orange', '따란', 1, 2, 3)
console.log(arr1);
arr1[2] ='따란'
console.log(arr1);


console.log(arr1);
arr1[4] =100
console.log(arr1);

//원소 추가
arr1[6] = '추가';
console.log(arr1);
arr1[7] = '추추가';
console.log(arr1);

// 동떨어진 인덱스 번호로 원소값 추가; 그 사이에 빈 값
arr1[10] = "얍";
console.log(arr1);
console.log(arr1[8]); //undefined
console.log(arr1[9]); //undefined

//배열에서 자주 사용되는 속성/메서드
// 1. length: 배열 길이 = 요소 개수 (속성)
console.log(arr2);
console.log(arr2.length);

console.log(arr2[arr2.length -1])
//원소 개수 6 = 배열 길이 6
//인덱스 번호 = 0 1 2 3 4 5
//배열에서 마지막 인텍스 번호 = 배열 길이 -1

//2. push(x): x를 맨 뒤에 추가

arr2.push(4);
arr2.push(5);
arr2.push(6);
arr2.push(7,8,9); //여러개 추가도 가능
console.log(arr2);

// 3. pop(): 맨 뒤 요소를 제거

arr2.pop();
console.log(arr2);
arr2.pop();
console.log(arr2);
arr2.pop();
console.log(arr2);

// 4. unshift(x): 맨 앞에 x를 추가
arr2.unshift('hi');
console.log(arr2);
arr2.unshift('a','b');//여러개 추가 가능
console.log(arr2);

// 5. shift(); 맨 앞 요소 제거
arr2.shift();
console.log(arr2);
arr2.shift();
console.log(arr2);

//6. indexOf(x): 배열 원소에 x가 있는지 찾음
console.log(arr2.indexOf('orange')); // 2 : 위치값..


console.log(arr2.indexOf('xxx')); // -1: 없는 값을 찾으면 -1 반환

// -1보다 크다면... 조건사용해서 있는지 없는지 확인..

//응용
//2차원 배열
//배열안에 배열들어갈 수 있어
//베열안에 배열..: 2차원 배열... 3차 4차...

const korean = [
    ['가', '나', '다'],
    ['라', '마', '바'],
    ['사', '아', '자'],
];

//[가, 나, 다]
console.log(korean);
console.log(korean[0]);
console.log(korean[1]);
console.log(korean[2]);

//가
console.log(korean[0][0]);  // 가: 배열안 배열 안 값
console.log(korean[1][0]);  // 라:  배열안 배열 안 값
console.log(korean[2][0]);  // 사:  배열안 배열 안 값

// 퀴즈) 아래 배열에서 아이스크림 출력하기
const letters = [
    ['사', '스', '자', '크'],
    ['진', '안', '리', '이'],
    ['가', '수', '림', '나'],
    ['아', '으', '차', '운'],
  ];

console.log(letters[3][0]); //아

console.log(letters[1][3]); //이

console.log(letters[0][1]); //스

console.log(letters[0][3]); //크

console.log(letters[2][2]); //림

//3차원 배열

const nums =[
    [
        [1,2,3],
        [4,5,6],
    ],
    [
        [7,8,9],
        [10,11,12],
    ]
]

console.log(nums);
//8뽑기

console.log(nums[1][0][1]);

// ############################################################
// 2. 객체 리터럴, 딕셔너리 (object)
// 배열: 순서가 있음
// 객체: 키-값 형태
// {}를 이용해 생성
// {key1: value1, key2, value2, key3, value3, ...}

const cat = {
    name: '나비',
    age: 1,
    mew: function(){
        return '냐옹';
    },
};

console.log(cat);

//console에서는 알파벳 순서로보여주는..

//객체 접근하기
// 1. 점 표기법
console.log(cat.name); //나비
console.log(cat.age);
console.log(cat.mew()); //객체의 함수 접근
//value 변경하기(객체 값 바꾸기)
cat.age = 3;
console.log(cat);

//key-value 추가하기
cat.gender = 'f';
console.log(cat);

// 2. 대괄호 표기법

console.log(cat['name']); //나비
console.log(cat['gender']); //f
console.log(cat['mew']()); //함수.. 냐옹

//value변경하기
cat['age'] = 5;
console.log(cat);

//key-value 추가하기
cat['weight'] = 5;
console.log(cat);

//value 값: boolean, array, number, string, object...
const dog = {
    name: 'Coco',
    isPoodle: true,
    age:3,
    sibling: ['Max', 'Lucy','Bella'],
}

console.log(dog);
console.log(dog.name);

console.log(dog.isPoodle);

console.log(dog.age);

console.log(dog.sibling);
console.log(dog.sibling[0]);
console.log(dog.sibling[1]);
console.log(dog.sibling[2]);

//객체 타입 확인하기
console.log(typeof dog);
console.log(typeof(dog));



