// spread 연산자
// 반복 가능한 개체에 대해서 단일 요소를 압축을 해제하는 역할

// spread in array
const a = [1, 2, 3];
const b = [4, 5];
const spread = [...a, ...b];
console.log(spread); // [1, 2, 3, 4, 5]

// spread in string
const c = [..."hello"];
console.log(c); // ['h', 'e', 'l', 'l', 'o']
const d = "hello".split("");
console.log(d); // ['h', 'e', 'l', 'l', 'o']

// spread in object
const chip = {
  base: "chip",
  company: "lotte",
};

const potatochip = {
  ...chip,
  flavor: "potato",
};
console.log(potatochip); // {base: 'chip', company: 'lotte', flavor: 'potato'}

const sweetPotatoChip = {
  ...sweetPotatoChip,
  flavor: "sweet PotatoChip",
};
console.log(sweetPotatoChip);
