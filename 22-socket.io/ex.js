const nickObjs = { hello: "안녕", apple: "사과" };

// object.values(): object에서 value만 뽑아서 배열로 만듦
console.log(object.values(nickObjs));
// 배열 메서드의 indexOf() -> 없으면 -1 반환
console.log(object.values(nickObjs).indexOf("안녕"));
console.log(object.values(nickObjs).indexOf("사과"));
console.log(object.values(nickObjs).indexOf("오렌지"));
