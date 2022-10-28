// #1 프로미스 (Promise)
// - 비동기 함수를 동기처리 하기 위해 만든 객체
// - 성공, 실패를 분리해서 반환
// 성공이든 실패든 무언가의 "최종 결과"
//  - fulfilled(resolve): 성공
//  - rejected (reject): 실패
/*
function Promise1(flag) {
  return new Promise(function (resolve, reject) {
    if (flag == true) {
      resolve(`promise상태는 fulfilled! then()으로 연결됩니다. \n
      이때 flag가 ${flag}.입니다`);
    } else {
      reject(`promise상태는 rejected! catch()으로 연결됩니다. \n
      이때 flag가 ${flag}.입니다`);
    }
  });
}

Promise1(5 < 3)
  .then(function (result) {
    console.log(result);
  })
  .catch(function (err) {
//     console.log(err);
//   });
// */

// // #2 Promise 사용법
// // index.js에서 "콜백함수" 를 통해 동기처리한 것을
// // "promise"를 이용해 동기처리

// function goMart() {
//   console.log("마트에 가서 어떤 음료를 살지 고민한다.");
// }

// function pickDrink() {
//   // pay
//   // *callback: 매개변수가 될 콜백함수
//   // 3초 고민하는 상황
//   return new Promise(function (resolve, reject) {
//     // setTimeout()비동기처리->동기처리 하기위해 promise로감싸기
//     setTimeout(function () {
//       console.log("고민 끝!");
//       product = "제로 콜라";
//       price = 4000; //2000, 4000두가지
//       if (price <= 2000) {
//         resolve();
//       } else {
//         reject();
//       }
//     }, 3000);
//   });
// }

// function pay() {
//   console.log(`${product} 제품의 가격은 ${price}이다.`);
// }

// function nopay() {
//   console.log(`${product} 제품의 가격은 ${price}이다. 비싸서 안삽니다`);
// }

// let product;
// let price;
// goMart();
// // pickDrink().then(pay);
// // reject도 사용하려는 경우
// pickDrink().then(pay).catch(nopay);

// #3 Promise 체이닝
// ex. 함수를 이용해 (4+3)*2 - 1=13 연산을 해보자
//  add -> mul ->sub순으로 연산 필요

// step.1 콜백함수를 사용
/*

function add(n1, n2, callback) {
  setTimeout(function () {
    let result = n1 + n2; //4+3 = 7
    callback(result); //callback(7)
  }, 1000);
}

function mul(n, callback) {
  setTimeout(function () {
    let result = n * 2; //7*2 =14
    callback(result); //callback(14)
  }, 700);
}

function sub(n, callback) {
  setTimeout(function () {
    let result = n - 1; //14-1:13
    callback(result); //callback(13)
  }, 500);
}

add(4, 3, function (x) {
  //add 함수의 정의부의 callback(result)
  console.log("1: ", x); //7
  mul(x, function (y) {
    // mul 함수의 정의부 callback(result)
    console.log("2: ", y); //14
    sub(y, function (z) {
      //sub함수의 정의부 callback(result)
      console.log("3; ", z); //13
    });
  });
});
*/

// step2 promise 사용
function add(n1, n2) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n1 + n2; //4+3 = 7
      resolve(result);
    }, 1000);
  });
}

function mul(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n * 2; //7*2 =14
      resolve(result);
    }, 700);
  });
}

function sub(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n - 1; //14-1:13
      //   resolve(result);
      reject(new Error("의도적으로 에러를 일으켜봤음!!"));
    }, 500);
  });
}
// promise 체이닝
add(4, 3) //add(4,3)->resolve(7)- then(7)
  .then(function (result) {
    console.log("1: ", result);
    return mul(result); //reeturn mul(7) ->resolve(14) -> then(14)
  })
  .then(function (result) {
    //result: 14
    console.log("2: ", result);
    return sub(result); //return sub(14) -> resolve(13) -> then(13)
  })
  .then(function (result) {
    //result: 13
    console.log("3: ", result);
  })
  .catch(function (err) {
    console.log("실패!!");
    console.log("err");
  });
//   dsfd
