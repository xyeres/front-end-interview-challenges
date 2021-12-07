class Shape {
  constructor(color, sides, name) {
    this.color = color;
    this.sides = sides;
    this.name = name;
  }

  describe() {
    console.log(`A shape with ${this.sides} sides and a color of ${this.color}`)
  }

}

let s1 = new Shape('red', 3, 'triangle')

s1.describe();
