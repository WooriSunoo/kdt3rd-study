// setTimeout(function () {
//   document.body.style.backgroundColor = "red";
//   setTimeout(function () {
//     document.body.style.backgroundColor = "orange";
//     setTimeout(function () {
//       document.body.style.backgroundColor = "yellow";
//       setTimeout(function () {
//         document.body.style.backgroundColor = "green";
//         setTimeout(function () {
//           document.body.style.backgroundColor = "blue";
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

function changecolors(colors) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      document.body.style.backgroundColor = colors;
      resolve();
    }, 1000);
  });
}

changecolors("red")
  .then(function () {
    return changecolors("orange");
  })
  .then(function () {
    return changecolors("yellow");
  })
  .then(function () {
    return changecolors("green");
  })
  .then(function () {
    return changecolors("blue");
  });
