// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    const tagPattern = /<\/?([a-z]+)>/gi; 
    const stack=[];

    while ((match=tagPattern.exec(html)!==null)){
        const tag=match[1]
        if (match[0][1]!=='/'){
            stack.push(tag);
        } else {
            if (stack.length===0 || stack[stack.length-1]!==tag){
                return false;
            }
            stack.pop()
        }

    }
    return stack.length===0;
}