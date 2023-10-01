class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set radius(newRadius) {
    if (newRadius > 0) {
      this._radius = newRadius;
    } else {
      throw new Error("radius needs to be more than 0");
    }
  }

  static max(circleArr) {
    let biggest = circleArr[0];
    for (let i = 1; i < circleArr.length; i++) {
      if (circleArr[i].radius > biggest.radius) {
        biggest = circleArr[i];
      }
    }
    return biggest;
  }
}

let c = new Circle(50); // sets radius
c.radius = 30; // changes radius, uses setter
console.log(c.radius); // returns radius, uses getter
// c.radius = -70; // crashes app, radius must be > 0
let a = new Circle(10);
let b = new Circle(60);
let d = new Circle(7);

let x = Circle.max([a, b, c, d]);
console.log(x.radius);
