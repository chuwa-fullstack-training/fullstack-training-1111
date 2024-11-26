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
}
// inheritance from Shape
Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

// your code goes here
// 1. implement a method getPerimeter for Triangle class
Triangle.prototype.getPerimeter = function(){
    return this.a + this.b + this.c; 
}
// 2. implement a method getArea for Triangle class
Triangle.prototype.getArea = function(){
    let s = this.getPerimeter() / 2;
    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
}
// 3. implement a new class Circle. this class should inherit from Shape class, and have a radius property.
class Circle extends Shape{
    constructor(radius){
        super();                // inherit from Shape class
        this.type = 'circle';   // override
        this.radius = radius;   // add new property
    }
}
// 4. implement a method area for Circle class
Circle.prototype.getArea = function(){
    return Math.PI * Math.pow(this.radius, 2);
}
// 5. implement a method circumference for Circle class
Circle.prototype.curcumference = function(){
    return 2 * Math.PI * this.radius;
}
// 6. change all code above to use ES6 class syntax

const tri_1 = new Triangle(2,2,3)
console.log(tri_1.getType()) // Output: triangle
console.log(tri_1.getPerimeter()) // Output: 7
console.log(tri_1.getArea()) // Output: 1.984313483298443

const circle_1 = new Circle(4)
console.log(circle_1.getType()) // Output: circle
console.log(circle_1.getArea()) // Output: 50.26548245743669
console.log(circle_1.curcumference()) // Output: 25.132741228718345