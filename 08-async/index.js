// console.log(1);
// setTimeout(function () {
//   console.log(2);
// }, 2000); // 2초 기다리고 실행
// console.log(3);
// 1 -> 3 -> 2 (비동기 특성 때문)

/////////////////////////////////

// ex. 편의점에서 음료수를 사고 나오는 상황
// function goMart() {
//   console.log("마트에가서 어떤 음료를 살지 고민한다..");
// }

// function pickDrink() {
//   // 3초 기다린 후에 실행
//   setTimeout(function () {
//     console.log("고민끝!");
//     product = "제로콜라";
//     price = 2000;
//   }, 3000);
// }

// function pay(product, price) {
//   console.log(`상품명 : ${product}, 가격 :  ${price}`);
// }
// let product;
// let price;
// pickDrink();
// pay(product, price);

/////////////////////

// 1. 콜백 함수를 이용해서 비동기 처리

function goMart() {
  console.log("마트에가서 어떤 음료를 살지 고민한다.");
}

function pickDrink(callback) {
  // 3초 기다린 후에 실행
  setTimeout(function () {
    console.log("고민끝!");
    product = "제로콜라";
    price = 2000;
    // pay() 함수 실행
    callback(product, price);
  }, 3000);
}

function pay(product, price) {
  console.log(`상품명 : ${product}, 가격 :  ${price}`);
}

let product;
let price;
pickDrink(pay);
