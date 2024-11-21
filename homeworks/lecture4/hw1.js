// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
  const regex = /<\/?([a-zA-Z][a-zA-Z0-9]*)\b[^>]*>/g;
  const stack = [];
  let match;

  while ((match = regex.exec(html)) !== null) {
    const fullTag = match[0];
    const tagName = match[1];
    
    if (fullTag.startsWith("</")) {
      if (stack.length === 0 || stack.pop() !== tagName) {
        return false; 
      }
    } else {
      stack.push(tagName);
    }
  }

  return stack.length === 0;
}