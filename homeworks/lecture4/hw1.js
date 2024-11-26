// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    const tagRegex = /<\/?([a-zA-Z0-9]+)>/g;

    const stack = [];
    let match;

    while ((match = tagRegex.exec(html)) !== null) {
        const tag = match[0];
        const tagName = match[1];

        // If it's an opening tag, push it onto the stack
        if (tag.startsWith("<") && !tag.startsWith("</")) {
            stack.push(tagName);
        }
        // If it's a closing tag, check the top of the stack
        else if (tag.startsWith("</")) {
            if (stack.length === 0 || stack.pop() !== tagName) {
                return false; // Unmatched closing tag
            }
        }
    }

    // If stack is not empty, there are unmatched opening tags
    return stack.length === 0;
}