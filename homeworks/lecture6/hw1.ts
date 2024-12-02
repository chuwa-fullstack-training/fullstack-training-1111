// 1. why there would be error in the following code? and how to fix it?
type User = {
  id: number;
  type: string;
};

function makeCustomer<T extends User>(u: T): T {
  return {
    id: u.id,
    type: "customer",
  };
}
/*
The return type T requires the returned object to exactly match the type of the input u. However, the function modifies the type property, causing a mismatch.
returning User type
*/
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

//function need to accept either two strings or two numbers
function f(a: string | number, b: string | number): string | number {
  if (typeof a === typeof b) {
    if (typeof a === "string") {
      return `${a} : ${b}`;
    } else if (typeof a === "number") {
      return a + b;
    }
  }
  throw new Error("Parameters must be either two strings or two numbers.");
}