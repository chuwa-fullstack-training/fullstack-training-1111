// 1. why there would be error in the following code? and how to fix it?
type User = {
  id: number;
  type: string;
};

// use interface for object
interface User {
  id: number;
  type: string;
}

function makeCustomer<T extends User>(u: T): T {
  return {
    id: u.id,
    type: "customer",
  };
}
// T may has other property like age, in this case the return is wrong
// could be
function makeCustomer<T extends User>(u: T): User {
  return {
    id: u.id,
    type: "customer",
  };
}

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number) {
  if (typeof a === "string") {
    return `${a} : ${b}`;
  } else {
    return a + b;
  }
}

function f<T extends number | number>(a: T, b: T): T {
  if (typeof a === "string") {
    return `${a} : ${b}`;
  } else {
    return a + b;
  }
}
