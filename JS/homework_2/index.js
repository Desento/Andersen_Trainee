function makeObjectDeepCopy(obj) {
    const copiedObj = {};

    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            copiedObj[key] = makeObjectDeepCopy(obj[key]);
        } else {
            copiedObj[key] = obj[key];
        }
    }

    return copiedObj;
}

const isValidArray = (arr) => Array.isArray(arr) && !arr.some(isNaN);
const isValidInput = (first, second) => !isNaN(first) && !isNaN(second);;
const correctInterval = (start, end) => {
    if (start > end) {
        return [end, start];
    }

    return [start, end];
}

function selectFromInterval(arr, first, second) {
    if (!isValidArray(arr)) {
        throw new Error('Ошибка!');
    }

    if (!isValidInput(first, second)) {
        throw new Error('Ошибка!');
    }

    const [start, end] = correctInterval(first, second);

    const filteredArray = arr.filter((item) => item >= start && item <= end);

    return filteredArray;
}

let myIterable = {
    from: 1,
    to: 5,
};

myIterable[Symbol.iterator] = function () {
    if (!Number.isInteger(this.from) || !Number.isInteger(this.to) || this.from > this.to) {
        throw new Error("Ошибка!");
    }

    return {
        current: this.from,
        last: this.to,

        next() {
            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            }

            return { done: true };
        },
    };
};

for (let num of myIterable) {
    console.log(num);
}