function call(name) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("kim");
    }, 1000);
  });
}

function back() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("back");
    }, 1000);
  });
}

function hell() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("callbackhell");
    }, 1000);
  });
}

call("kim")
  .then((name) => {
    console.log(name + "반가워");
    return back();
  })
  .then((txt) => {
    console.log(txt + "을 실행했구나");
    return hell();
  })
  .then((message) => {
    console.log("여기는" + message);
  });

// 정답
// function call(name) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(name);
//       resolve(name);
//     }, 1000);
//   });
// }

// function back() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("back");
//       resolve("back");
//     }, 1000);
//   });
// }

// function hell() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("callback hell");
//     }, 1000);
//   });
// }

// call("kim")
//   .then((name) => {
//     console.log(name + " 반가워");
//     return back();
//   })
//   .then((txt) => {
//     console.log(txt + " 을 실행했구나");
//     return hell();
//   })
//   .then((message) => {
//     console.log("여기는 " + message);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
