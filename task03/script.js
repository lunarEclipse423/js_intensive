const makeObjectDeepCopy = (obj) => {
    if (obj === undefined) {
        return obj;
    }

    let resultObj = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        resultObj[key] = obj[key] === null ? null : typeof obj[key] === 'object'? 
            makeObjectDeepCopy(obj[key]) : obj[key];
    }
    
    return resultObj;
}
