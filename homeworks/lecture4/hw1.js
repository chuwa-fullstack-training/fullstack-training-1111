// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    const tagStack = [];
    const tagRegex = /<\/?([a-zA-Z]+)>/g; 
    let match;

    while ((match = tagRegex.exec(html)) !== null) {
        const tag = match[1];

        if (html[match.index + 1] === '/') { 
            if (tagStack.length === 0 || tagStack.pop() !== tag) {
                return false; 
            }
        } else { 
            tagStack.push(tag);
        }
    }

    return tagStack.length === 0;
}