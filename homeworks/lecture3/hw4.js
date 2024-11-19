function Shape() {
    this.type = 'shape';
}

Shape.prototype.getType = function() {
    return this.type;
}

Shape.prototype.getPerimeter = function() {
    return this.a + this.b + this.c
}

Shape.prototype.getCircumference = function() {
    let pi = 3.14159
    return 2 * this.radius * pi
}

Shape.prototype.getArea = function() {
    let pi = 3.14159

    if (this.type === 'triangle') {
        let p = this.getPerimeter() / 2;
        return Math.sqrt(p * (p - this.a) * (p - this.b)* (p - this.c))
    }else if (this.type === 'circle') {
        return pi * this.radius * this.radius
    }else return 0
}

function Triangle(a, b, c) {
    this.type = 'triangle';
    this.a = a;
    this.b = b;
    this.c = c;
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;



function Circle(radius) {
    this.type = 'circle';
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
// Circle.prototype.getCircumference = function () {
//     return 2 * this.radius * pi
// };

// Test cases
// const triangle = new Triangle(5, 12, 13);
// console.log(triangle.getPerimeter());
// console.log(triangle.getArea());
// const circle = new Circle(5);
// console.log(circle.getCircumference());
// console.log(circle.getArea());

// your code goes here
// 1. implement a method getPerimeter for Triangle class
// 2. implement a method getArea for Triangle class

// 3. implement a new class Circle. this class should inherit from Shape class, and have a radius property.
// 4. implement a method area for Circle class
// 5. implement a method circumference for Circle class

// 6. change all code above to use ES6 class syntax