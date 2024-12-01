// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    let regex = /<\/?[a-zA-Z]+[^>]*\/?>/g;
    let stack = [];
    let tags = html.match(regex);
    
    if (tags) {
      for (let tag of tags) {
         if (tag.endsWith('/>')) {
          continue;
        }
        if (tag.startsWith('</')) {
           let tagName = tag.slice(2).replace(/[^a-zA-Z]/g, '');
          if (stack.length === 0 || stack[stack.length - 1] !== tagName) {
            return false;
          } else {
            stack.pop();
          }
        } else if (tag.startsWith('<')) {
           let tagName = tag.slice(1).replace(/[^a-zA-Z]/g, '');
          stack.push(tagName);
        }
      }
    }
    return stack.length === 0;
  }
