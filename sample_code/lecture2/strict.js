'use strict';

x = 10;
console.log(x);

delete x;

function foo(a, a) {
  console.log(a);
}

foo(1, 2);

const obj = {
  get foo() {
    return 2024;
  }
};

obj.foo = 100;
console.log(obj.foo);

let eval = 10;
