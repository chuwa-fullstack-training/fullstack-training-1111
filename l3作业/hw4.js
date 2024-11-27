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

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

// your code goes here
// 1. implement a method getPerimeter for Triangle class
Triangle.prototype.getPerimeter = function() {
    return this.a + this.b + this.c;
};

// 2. implement a method getArea for Triangle class
Triangle.prototype.getArea = function() {
    const p = (this.a + this.b + this.c) / 2; // 半周长
    return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)); // 海伦公式
};

// 3. implement a new class Circle. this class should inherit from Shape class, and have a radius property.
function Circle(r) {
    this.type = 'circle';
    this.r = r;
    }
Circle.prototype=Object.create(Shape.prototype);
Circle.prototype.constructor=Circle;
// 4. implement a method area for Circle class
Circle.prototype.getArea = function() {
    return Math.PI * Math.pow(this.r, 2); // 计算面积：πr²
};

// 5. implement a method circumference for Circle class
Circle.prototype.getCircumference = function() {
    return 2 * Math.PI * this.r; // 计算周长：2πr
};

// 6. change all code above to use ES6 class syntax



class Shape {
    constructor(a) {
        this.name = name; // 实例属性
    }

    // 定义方法
    speak() {
        return `${this.name} makes a sound.`;
    }
}

\\\\\\\\\\\\\\\\\\\
// 定义 Shape 类
class Shape {
    constructor() {
        this.type = 'shape';
    }

    getType() {
        return this.type;
    }
}

// 定义 Triangle 类，继承自 Shape
class Triangle extends Shape {
    constructor(a, b, c) {
        super(); // 调用父类构造函数
        this.type = 'triangle'; // 设置类型
        this.a = a;
        this.b = b;
        this.c = c;
    }

    // 计算周长
    getPerimeter() {
        return this.a + this.b + this.c;
    }

    // 计算面积
    getArea() {
        const p = (this.a + this.b + this.c) / 2; // 半周长
        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)); // 海伦公式
    }
}

// 定义 Circle 类，继承自 Shape
class Circle extends Shape {
    constructor(r) {
        super(); // 调用父类构造函数
        this.type = 'circle'; // 设置类型
        this.r = r; // 半径
    }

    // 计算面积
    getArea() {
        return Math.PI * Math.pow(this.r, 2); // 计算面积：πr²
    }

    // 计算周长
    getCircumference() {
        return 2 * Math.PI * this.r; // 计算周长：2πr
    }
}

// 测试代码
const triangle = new Triangle(3, 4, 5);
console.log(triangle.getType()); // "triangle"
console.log(triangle.getPerimeter()); // 12
console.log(triangle.getArea()); // 6

const circle = new Circle(5);
console.log(circle.getType()); // "circle"
console.log(circle.getArea()); // 78.53981633974483
console.log(circle.getCircumference()); // 31.41592653589793


