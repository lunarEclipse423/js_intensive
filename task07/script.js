Array.prototype.myFilter = function(callback, ...args) {
    const result = [];
    if(args.length > 0) {
        this.forEach((element, index, array) => {
            if (callback.call(args[0], element, index, array)) {
                result.push(element);
            }
        });
    } else {
        this.forEach((element, index, array) => {
            if (callback(element, index, array)) {
                result.push(element);
            }
        });
    }
    return result;
}
