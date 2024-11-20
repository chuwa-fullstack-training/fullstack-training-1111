function Shape() {
  this.type = 'shape';
}

Shape.prototype.getType = function () {
  return this.type;
};

function Triangle(a, b, c) {
  this.type = 'triangle';
  this.a = a;
  this.b = b;
  this.c = c;
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

// your code goes here
// 1. implement a method getPerimeter for Triangle class
// 2. implement a method getArea for Triangle class
Triangle.prototype.getPerimeter = function () {
  return this.a + this.b + this.c;
};

Triangle.prototype.getArea = function () {
  let s = this.getPerimeter() / 2;
  return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
};

// 3. implement a new class Circle. this class should inherit from Shape class, and have a radius property.
// 4. implement a method area for Circle class
// 5. implement a method circumference for Circle class
function Circle(radius) {
  this.type = 'circle';
  this.r = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function () {
  return Math.PI * Math.pow(this.r, 2);
};

Circle.prototype.circumference = function () {
  return 2 * Math.PI * this.r;
};

// 6. change all code above to use ES6 class syntax
class Shape {
  constructor(type = 'shape') {
    this.type = type;
  }

  getType() {
    return this.type;
  }
}

class Triangle extends Shape {
  constructor(a, b, c) {
    super('triangle');
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }

  getArea() {
    let s = this.getPerimeter() / 2;
    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }
}

class Circle extends Shape {
  constructor(r) {
    super('circle');
    this.r = r;
  }

  area() {
    return Math.PI * Math.pow(this.r, 2);
  }

  circumference() {
    return 2 * Math.PI * this.r;
  }
}
