// 1. why there would be error in the following code? and how to fix it?
type User = {
  id: number;
  type: string;
};

function makeCustomer<T extends User>(u: T): T {
  return {
    // id: u.id,
    ...u,
    type: "customer",
  };
}

// T is generic typr that extends User, so it should have more addtinal properties, 
// add spread operator ...u to  that all properties of u are copied into the new object.

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number) {

  // if (typeof a === "string") {
  //   return `${a} : ${b}`;
  // } else {
  //   return a + b;
  // }
  if (typeof a !== typeof b) {
    throw new Error("Both parameters must be of the same type");
  }

  else if (typeof a === "string" && typeof b === "string") {
    return `${a} : ${b}`;
  }

  else if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  
}
// issue: type mismatch when do addtion
