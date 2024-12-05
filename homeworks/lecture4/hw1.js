// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
  // stack
  // use regular express find the <> and </>

  const tagRegex = /<\/?([a-zA-Z]+)>/g;

  let stack = [];
  let match = tagRegex.exec(html);
  while (match !== null);
  {
    const [fullTag, tagName] = match;
    if (fullTag.startsWith("</")) {
      if (stack.length === 0 || stack.pop() !== tagName) {
        return false;
      }
    } else {
      stack.push(tagName);
      match = tagRegex.exec(html);
    }
  }

  return stack.length === 0;
}
