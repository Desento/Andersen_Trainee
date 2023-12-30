function concatStrings(str, separator = '') {
    let result = str;

    function innerConcat(nextStr) {
        if (typeof nextStr === 'string' && nextStr !== '') {
            result = result !== '' ? `${result}${separator}${nextStr}` : nextStr;
        }

        return nextStr === undefined ? result : innerConcat;
    }

    return innerConcat('');
}

class Calculator {
    constructor(x, y) {
        if (typeof x !== 'number' || typeof y !== 'number') {
            throw new Error('Невалидные вводные данные');
        }

        this.setX(x);
        this.setY(y);
    }

    setX(num) {
        if (typeof num !== 'number' || !Number.isFinite(num)) {
            throw new Error('Невалидное число');
        }

        this.x = num;
    }

    setY(num) {
        if (typeof num !== 'number' || !Number.isFinite(num)) {
            throw new Error('Невалидное число');
        }

        this.y = num;
    }

    logSum() {
        console.log(this.x + this.y);
    }

    logMul() {
        console.log(this.x * this.y);
    }

    logSub() {
        console.log(this.x - this.y);
    }

    logDiv() {
        if (this.y === 0) {
            throw new Error('На ноль делить нельзя');
        }

        console.log(this.x / this.y);
    }
}
