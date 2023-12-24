function isValidInputForConvert(num1, num2) {
    return num1 !== ''
        && num2 !== ''
        && !isNaN(num1)
        && !isNaN(num2)
        && Number.isInteger(parseFloat(num2))
        && parseInt(num2) >= 2
        && parseInt(num2) <= 36;
}

function convert() {
    const num1 = prompt('Введите первое число:');
    const num2 = prompt('Введите второе число:');

    if (!isValidInputForConvert(num1, num2)) {

        return console.log("Некорректный ввод!");

    }

    return console.log(+parseInt(num1).toString(num2));
}

convert();

function isValidInputForCulculate(num) {
    return num !== ''
        && !isNaN(num);
}

function culculate() {
    const num1 = prompt('Введите первое число:');

    if (!isValidInputForCulculate(num1)) {

        return console.log("Некорректный ввод!");

    }

    const num2 = prompt('Введите второе число:');

    if (!isValidInputForCulculate(num2)) {

        return console.log("Некорректный ввод!");

    }

    return console.log(`Ответ: ${+num1 + +num2}, ${+num1 / +num2}`);
}

culculate(); 