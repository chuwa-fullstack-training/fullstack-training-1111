// 1. why there would be error in the following code? and how to fix it?
// Error: template T extends User means it might have more properties other than
// id & type
// use spread ... to copy all properties from u to return object
type User1 = {
  id: number;
  type: string;
};

function makeCustomer<T extends User1>(u: T): T {
  return {
    ...u,
    id: u.id,
    type: "customer",
  };
}

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error

// Error: only check if a is a string, even if a is not doesnt mean b is not as well
function f(a: string | number, b: string | number) {
    if(typeof a !== typeof b) {
        throw new Error("Both arguments should be the same type");
    }
  if (typeof a === "string" && typeof b === "string") {
    return `${a} : ${b}`;
  } else if(typeof a === "number" && typeof b === "number"){
    return a + b;
  }
}
