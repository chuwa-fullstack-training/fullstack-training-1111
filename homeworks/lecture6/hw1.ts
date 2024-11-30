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
// 'T extends User', means T is a type must at least have 'id' and 'type'
// Original return type of makeCustomer() is T
// but in function body, it only returns an object with props 'id' and 'type'. Regarding to the User Type, it is not a complete T type in general case
// To fix this, it spreads the properties of 'u' and override the 'type' property to keep other props and make the return value T type


// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number) {
  if (typeof a === "string" && typeof b === 'string') {
    return `${a} : ${b}`;
  } else if(typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    throw new TypeError(`Invalid parameter types. Type of a: ${typeof a}, Type of b: ${typeof b}`);
  }
}
