// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
    // Implement the function here
    if(typeof obj !=="object" || obj===null){
        return obj;
    }

    const seen = new WeakMap();

    const clone = (item) =>{
        if(seen.has(item)){
            return seen.get(item);
        }
    

        const newItem = Array.isArray(item) ? []:{};

        seen.set(item, newItem);

        for(const key in item){
            if(item.hasOwnProperty(key)){
                newItem[key] = clone(item[key]);
            }
        }
        return newItem;
    }
    return clone(obj);
}