const isValidInput = (str) => str.trim().length && !isNaN(str);
const rangeForToString = (num) => parseInt(num) >= 2 && parseInt(num) <= 36;

function convert() {
    const num1 = prompt('Введите первое число:');
    const num2 = prompt('Введите второе число:');

    if (!isValidInput(num1) || !isValidInput(num2) || !rangeForToString(num2)) {
        return console.log("Некорректный ввод!");
    }

    return console.log(+parseInt(num1).toString(num2));
}

convert();

function culculate() {
    const num1 = prompt('Введите первое число:');

    if (!isValidInput(num1)) {
        return console.log("Некорректный ввод!");
    }

    const num2 = prompt('Введите второе число:');

    if (!isValidInput(num2)) {
        return console.log("Некорректный ввод!");
    }

    return console.log(`Ответ: ${+num1 + +num2}, ${+num1 / +num2}`);
}

culculate();