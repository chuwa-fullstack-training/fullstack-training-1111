// 1. why there would be error in the following code? and how to fix it?
type User = {
  id: number;
  type: string;
};

// function makeCustomer<T extends User>(u: T): T {
//   return {
//     id: u.id,
//     type: "customer",
//   };
// }
// The returned object might not satistfy type T, because T could have additional properties
// beyong id and type.
function modifiedMakeCustomer<T extends User>(u: T): T {
  return {
    ...u,
    type: "customer",
  };
}

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
// function f(a: string | number, b: string | number) {
//   if (typeof a === "string") {
//     return `${a} : ${b}`;
//   } else {
//     return a + b;
//   }
// }
function modifiedf(a: string | number, b: string | number):string|number {
  if (typeof a === "string" && b === "string") {
    return `${a} : ${b}`;
  } else if(typeof a ==="number" && b === "number"){
    return a + b;
  } else {
    throw new Error("a and b must be the same type.");
  }
}