// 1. why there would be error in the following code? and how to fix it?
// type User = {
//   id: number;
//   type: string;
// };

function makeCustomer<T extends User>(u: T): T {
  return {
    // ...u,
    id: u.id,
    type: "customer",
  };
}
// makeCustomer function is trying to return an object with type '{ id: number; type: string; }', which is not 
// assignable to the generic type T that extends User, because the returned object didn't preserve all the properties
// from User. To fix it we can use the spread operator '...u'

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number) {
  if (typeof a === "string" && typeof b === "string") {
    return `${a} : ${b}`;
  } else if (typeof a === "number" && typeof b === "number"){
    return a + b;
  } else {
    throw new Error("Parameters should have the same type")
  }
}
