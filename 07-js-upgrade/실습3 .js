class Rectangle extends shape {
  constructor(width, height) {
    super(width, height);
  }

  getDiagonal() {
    Math.sqrt(this.width ** 2 + this.height ** 2);
  }
}

const rec2 = new Rectangle(3, 4);
console.log(rec2.getDiagonal());
