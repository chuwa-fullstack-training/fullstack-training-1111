/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
*/
function extend(o, p) {
    // implement your code here
    for (let key in p) { // 遍历 p 的所有可枚举属性
        o[key] = p[key]; // 将属性和值复制到 o
    }
    return o; // 返回修改后的 o
}

/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
function union(o, p) {
    // implement your code here
    for (let key in p) {
        if (p.hasOwnProperty(key)) {
            result[key] = p[key];
        }
    }

    // 将 o 的所有属性覆盖 result 中的相同属性
    for (let key in o) {
        if (o.hasOwnProperty(key)) {
            result[key] = o[key];
        }
    }
}

/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function restrict(o, p) {
    // implement your code here
            if (p.hasOwnProperty(key)) {
            delete o[key];
        }
        return o;
}

/*
* Return a new object that holds only the properties of o that also appear
* in p. This is something like the intersection of o and p, but the values of
* the properties in p are discarded
*/
function intersection(o, p) {
    // implement your code here
    let result = {}; // 创建一个新对象用于存储交集属性

    for (let key in o) { // 遍历 o 的所有属性
        if (o.hasOwnProperty(key) && p.hasOwnProperty(key)) { // 检查 p 是否也有相同的属性
            result[key] = o[key]; // 将 o 的属性值添加到结果对象
        }
    }

    return result; // 返回交集对象
}