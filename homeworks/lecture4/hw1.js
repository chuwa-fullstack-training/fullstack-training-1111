// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    const pattern = /<\/?([a-z]+)>/g;
    const s = [];
    let match;

    while ((match = pattern.exec(html)) !== null) {
        // console.log(match)
        const tag = match[1];
    
        // Check if it's a closing tag
        if (match[0][1] === '/') {
          // Closing tag: check if it matches the last opened tag
          if (s.length === 0 || s.pop() !== tag) {
            
            return false;
          }
        } else {
          // Opening tag: push onto the stack
          s.push(tag);
        }
      }
    
      // If the stack is empty, all tags are properly paired
      return s.length === 0;
}

console.log(checkValidHTML('<html><head><title>My Title</title></head></html>')); // true
console.log(checkValidHTML('<html><head><title>My Title</title></head></head></html>')); // false
console.log(checkValidHTML('<html><head><title>My Title</title></head></html')); // false
