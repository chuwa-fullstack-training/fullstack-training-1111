// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
  // implement your solution here
  const regex = /<(\/?)(\w+)\b[^>]*>?/g;
  const stk = [];
  let match;

  while ((match = regex.exec(html)) !== null) {
    let [, isClosing, tag] = match;
    if (!isClosing) {
      stk.push(tag);
    } else {
      if (stk.length === 0 || stk[stk.length - 1] !== tag) return false;
      stk.pop();
    }
  }

  return stk.length === 0;
}
