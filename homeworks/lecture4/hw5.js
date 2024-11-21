// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
    // Implement the function here
    let visited = {}

    function helper(target, visited){
        if (target === null || typeof target !== 'object'){ 
            // note that typeof null returns 'object'
            return target
        }

        // target type is array or object
        if (target in visited){
            return visited[target]
        }

        let copy = Array.isArray(target) ? [] : {}
        visited[target] = copy

        for (let element in target){
            copy[element] = helper(target[element], visited)
        }

        return copy

    }

    return helper(obj)
}

const data = {
    name: 'foo',
    child: null
}
data.child = data;

console.log(cloneDeepWithLoop(data))