function Shape() {
    this.type = 'shape';
}

Shape.prototype.getType = function() {
    return this.type;
}

function Triangle(a, b, c) {
    this.type = 'triangle';
    this.a = a;
    this.b = b;
    this.c = c;

    function getPerimeter() {
        return a + b + c;
    }

    function getArea() {
        let s = getPerimeter() / 2;
        return Math.sqrt(s * (s - a) * (s - b) * (s - c));

    }
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

function Circle(radius) {
    this.type = 'circle';
    this.radius = radius;

    function area() {
        return Math.PI * radius * radius;
    }

    function circumference() {
        return 2 * Math.PI * radius;
    }
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

// your code goes here
// 1. implement a method getPerimeter for Triangle class
// 2. implement a method getArea for Triangle class

// 3. implement a new class Circle. this class should inherit from Shape class, and have a radius property.
// 4. implement a method area for Circle class
// 5. implement a method circumference for Circle class

// 6. change all code above to use ES6 class syntax
class Shape {
    constructor(type) {
        this.type = type;
    }
}

class Triangle extends Shape {
    constructor(type, a, b, c) {
        super(type);
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {
        return a + b + c;
    }

    getArea() {
        let s = getPerimeter() / 2;
        return Math.sqrt(s * (s - a) * (s - b) * (s - c));

    }
}

class Circle extends Shape {
    constructor(type, radius) {
        super(type);
        this.radius = radius;
    }

    area() {
        return Math.PI * radius * radius;
    }

    circumference() {
        return 2 * Math.PI * radius;
    }
}