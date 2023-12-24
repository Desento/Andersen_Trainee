function makeObjectDeepCopy(obj) {

    const copiedObj = {};

    for (let key in obj) {
        copiedObj[key] = typeof obj[key] === 'object'
            ? makeObjectDeepCopy(obj[key])
            : obj[key];
    }

    return copiedObj
};


