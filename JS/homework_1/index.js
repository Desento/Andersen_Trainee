function convert() {
    let num1 = prompt('Введите первое число:');
    let num2 = prompt('Введите второе число:');
    return !isNaN(num1) && !isNaN(num2) ? console.log(+parseInt(num1).toString(num2)) : console.log("Некорректный ввод!")
}

convert();

function culculate() {
    let num1 = prompt('Введите первое число:');
    let num2 = prompt('Введите второе число:');
    return !isNaN(num1) && !isNaN(num2) ? console.log(`Ответ: ${+num1 + +num2}, ${+num1 / +num2}`) : console.log("Некорректный ввод!")
}

culculate();