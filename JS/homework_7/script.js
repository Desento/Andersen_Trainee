let result = document.getElementById('result');
let currentValue = '';
let currentOperator = '';

function insert(value) {
    result.value += value;
}

function clearResult() {
    result.value = '';
    currentValue = '';
    currentOperator = '';
}

function clearInput() {
    result.value = '';
}

function backspace() {
    result.value = result.value.slice(0, -1);
}

function calculate() {
    try {
        let num1, num2;

        if (currentOperator !== '') {
            num1 = parseFloat(currentValue);
            num2 = parseFloat(result.value);
        }

        switch (currentOperator) {
            case '+':
                result.value = formatResult(num1 + num2);
                break;
            case '-':
                result.value = formatResult(num1 - num2);
                break;
            case '*':
                result.value = formatResult(num1 * num2);
                break;
            case '/':
                result.value = formatResult(num1 / num2);
                break;
        }

        currentValue = '';
        currentOperator = '';
    } catch (error) {
        result.value = 'Ошибка';
    }
}

function formatResult(value) {
    return parseFloat(value.toFixed(2)).toString();
}

function setOperator(operator) {
    if (currentValue === '') {
        currentValue = result.value;
        result.value = '';
    }

    currentOperator = operator;
}

function calculatePercentage() {
    try {
        const rawResult = parseFloat(result.value);
        const percentageResult = rawResult / 100;

        result.value = formatResult(percentageResult);
    } catch (error) {
        result.value = 'Ошибка';
    }
}

function changeSign() {
    try {
        const rawResult = parseFloat(result.value);

        result.value = formatResult(-rawResult);
    } catch (error) {
        result.value = 'Ошибка';
    }
}

function updateDisplay() {
    result.value = currentValue;
}
