// 1. why there would be error in the following code? and how to fix it?
type User = {
  id: number;
  type: string;
};

function makeCustomer<T extends User>(u: T): T {
  return {
    // Change id = u.id into ...u. This way it copies all properties from u to the returning object
    ...u,
    type: "customer",
  };
}

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number) {
  // Add an if statement here, see if the types match.
  if (typeof a !== typeof b) {
    throw new Error("Data type doesn't match!")
  }
  if (typeof a === "string") {
    return `${a} : ${b}`;
  } else {
    return (a as number) + (b as number);
  }
}
