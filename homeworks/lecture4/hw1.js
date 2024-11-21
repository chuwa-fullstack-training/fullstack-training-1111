// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    const tagRegex = /<[^>]+>/g;

    // Find all tags
    const tags = html.match(tagRegex);

    if(tags.length % 2 !== 0){
        return false
    }
    
    let l = 0
    let r = tags.length - 1
    while(l < r){
        if(tags[l].slice[1] !== tags[r].slice[2]){
            return fasle
        }
        l++
        r--
    }

    return true

}

console.log(checkValidHTML('<html><head><title>My Title</title></head></head></html>'))
console.log(checkValidHTML('<html><head><title>My Title</title></head></html>'))