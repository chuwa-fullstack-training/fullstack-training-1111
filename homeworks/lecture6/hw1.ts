// 1. why there would be error in the following code? and how to fix it?
type User = {
  id: number;
  type: string;
};

function makeCustomer<T extends User>(u: T): T {
  return {
    ...u,
    type: "customer",
  };
}

// because typescript expects the return value of the function to be the generic type T

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number):string | number {
  if (typeof a === typeof b) {
    if (typeof a === "string") {
      return `${a} : ${b}`;
    } else {
      return a + (b as number); 
    }
  } else {
    throw new Error("Parameters must both be strings or both be numbers.");
  }
}


