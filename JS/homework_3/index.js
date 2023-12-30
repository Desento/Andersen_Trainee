Array.prototype.myFilter = function (callback, thisArg) {
    if (typeof callback !== "function") {
        throw new Error("Callback is not a function");
    }

    const objectFromArray = Object(this);
    const result = [];

    for (let i = 0; i < objectFromArray.length; i++) {
        if (i in objectFromArray) {
            if (callback.call(thisArg, objectFromArray[i], i, objectFromArray)) {
                result.push(objectFromArray[i]);
            }
        }
    }

    return result;
};

const createDebounceFunction = (func, wait) => {
    let timeout;

    return function (...args) {
        const context = this;

        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
};