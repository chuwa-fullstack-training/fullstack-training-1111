// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    const reg = /<\/?([a-zA-Z]+)(\/)?>/g;
    const stack = [];

    while((match = reg.exec(html)) !== null) {
        const tag = match[1];
        if(match[0][1] !== '/') {
            stack.push(tag);
        } else {
            if(stack.length === 0 || stack.pop() !== tag) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(checkValidHTML('<html><head><title>My Title</title></head></html>'));
console.log(checkValidHTML('<html><head><title>My Title</title></head></head></html>'));
