// 클래스 정의 (틀을 만듦)
class Minjeong {
  // 생성자 함수
  constructor(year, name, hobby) {
    this.year = year;
    this.name = name;
    this.hobby = hobby;
  }

  // 메소드 : 나이를 출력
  getAge() {
    console.log(`${this.name}은 ${2024 - this.year}살 입니다.`); //김민정은 24살 입니다.
  }
}

// 클래스를 이용해 객체를 생성!
const minjeong1 = new Minjeong(2000, "김민정", "piano");
console.log("minjeong1 >", minjeong1); // // Minjeong {year: 2000, name: '김민정', hobby: 'piano'}

console.log(minjeong1.name); // 김민정
minjeong1.getAge();

const minjeong2 = new Minjeong(2000, "김민정", "piano");
console.log(minjeong2); // Minjeong {year: 2000, name: '김민정', hobby: 'piano'}

class Kim extends Minjeong {
  constructor(year, name, hobby, color) {
    // 부모 객체에서 상속 받아옴 = 상속한 부모 클래스의 생성자를 호출
    super(year, name, hobby);
    this.color = color;
  }

  getKimInfo() {
    return `${this.year}년에 태어난 ${this.name} 의 좋아하는 색은 ${this.color}`;
  }
}

const Kim1 = new Kim(2000, "김민정", "piano", "yelloW");
console.log(Kim1.name); // 김민정
console.log(Kim1.getKimInfo()); // 2000년에 태어난 김민정 의 좋아하는 색은 yelloW
Kim1.getAge();
