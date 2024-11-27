// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
     const openTags = [];

    // 匹配所有开闭标签
    const allTags = htmlString.match(/<\/?[a-zA-Z0-9]+>/g) || [];

    // 遍历所有标签，提取需要的闭合标签
    allTags.forEach(tag => {
        if (tag.startsWith("</")) {
            // 如果是闭合标签，与栈顶的开标签比较
            if (openTags.length === 0 || `</${openTags[openTags.length - 1].slice(1)}` !== tag) {
                console.log(false);
                return;
            }
            // 如果匹配，移除栈顶的开标签
            openTags.pop();
        } else {
            // 如果是开标签，添加到栈中
            openTags.push(tag);
        }
    });

    // 检查是否有未闭合的标签
    if (openTags.length > 0) {
        openTags.forEach(tag => {
            const closingTag = `</${tag.slice(1)}`;
            allTags.push(closingTag);
        });
    }

    // 检查数组大小是否匹配
    const closingTags = htmlString.match(/<\/[a-zA-Z0-9]+>/g) || [];
    if (closingTags.length !== allTags.filter(tag => tag.startsWith("</")).length) {
        return false;
    }

    // 检查标签顺序是否匹配
    let index = 0;
    for (let i = 0; i < allTags.length; i++) {
        const tag = allTags[i];
        if (tag.startsWith("</")) {
            if (closingTags[index] !== tag) {
                return false;
            }
            index++;
        }
    }

    return true;
}