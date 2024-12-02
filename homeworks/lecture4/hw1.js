// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    let tags = html.match(/(<([^>|<]+)>?)/g);
    let i = 0; 
    let j = tags.length - 1;
    while (i < j) {
        let tagi = tags[i].replace('<', '').replace('>', '');
        let tagj = tags[j].replace('</', '').replace('>', '');
        if (tagi === tagj) {
            ++ i;
            -- j;
        } else {
            return false;
        }
    }
    return true;
}