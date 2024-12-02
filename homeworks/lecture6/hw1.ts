// 1. why there would be error in the following code? and how to fix it?
// function is trying to return an object that is guaranteed to be of type User, when it is expected be return an object of type T. 
// Input u is of type T, so copying entire u and overrides type property can guarantee the returned object to be of type T.

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

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number): string | number {
  if (typeof a === "string" && typeof b === 'string') {
    return `${a} : ${b}`;
  } else if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }

  throw new Error("Parameters should be either two strings or two numbers")
}
