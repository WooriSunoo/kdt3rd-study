function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function back() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("promise exec");
      resolve("promise exec ");
    }, 1000);
  });
}
function hell() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Promise로 변경");
    }, 1000);
  });
}

// call("kim", function (name) {
//   console.log(name + "반가워");
//   back(function (txt) {
//     console.log(txt + "을 실행했구나");
//     hell(function (message) {
//       console.log("여기는 " + message);
//     });
//   });
// // });

// call("choi")
//   .then(function (name) {
//     console.log(name + "반가워");
//     return back();
//   })
//   .then(function (txt) {
//     console.log(txt + "을 실행했구나");
//     return hell();
//   })
//   .then(function (message) {
//     console.log("여기는 " + message);
//   });

async function exec() {
  let user = await call("kim");
  console.log(user + "반가워");
  let videos = await back();
  console.log(videos + "을 실행했구나");
  let title = await hell();
  console.log("여기는 " + title);
}

exec();
