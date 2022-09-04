const createDebounceFunction = (cb, ms) => {
    let timeout = '';
    return function() {
        let callCb = () => cb.apply(this, arguments);
        clearTimeout(timeout);
        timeout = setTimeout(callCb, ms);
    };
}
