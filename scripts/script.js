let firstNumber, lastNumber, operator, firstResult, finalResult, result;
const numberButtonsList = document.querySelectorAll('.number-button')
const operatorButtonsList = document.querySelectorAll('.operator-button')
const display = document.querySelector('#display')
const upperDisplay = document.querySelector('#upper-display')
const lowerDisplay = document.querySelector('#lower-display')
const equalsSign = document.querySelector('#operator-equals')

const add = (a, b) => result = a + b;
const subtract = (a, b) => result = a - b;
const multiply = (a, b) => result = a * b;
const divide = (a, b) => result = a / b;

const operate =  (operator, a, b) => {
    operator === '+' ? add(a, b):
    operator === '-' ? subtract(a, b):
    operator === '*' ? multiply(a, b):
    operator === '/' ? divide (a, b): null
}

const getNumberInput = function (e) {
    !operator ? (!firstNumber)          ? (firstNumber = "" + e.currentTarget.innerText,
                                            lowerDisplay.innerText = firstNumber)                     :
                (firstNumber.length < 8)? (firstNumber = firstNumber + e.currentTarget.innerText,
                                            lowerDisplay.innerText = firstNumber)                     :
                null:
    operator  ? (!lastNumber)           ? (lastNumber = "" + e.currentTarget.innerText, 
                                            lowerDisplay.innerText = lastNumber,
                                            upperDisplay.innerText = firstNumber + ' ' + operator)          :
                (lastNumber.length < 8) ? (lastNumber = lastNumber + e.currentTarget.innerText,
                                            lowerDisplay.innerText = lastNumber,
                                            upperDisplay.innerText = firstNumber + ' ' + operator)    :
                null:
    null; 
}

const operatorClick = (e) => {
    operator = e.currentTarget.innerText;
    upperDisplay.innerText = firstNumber + ' ' + operator;
    lowerDisplay.innerText = '';
}

const equalClick = () => {
    operate(operator, parseInt(firstNumber), parseInt(lastNumber));
    lowerDisplay.innerText = result;
    upperDisplay.innerText = `${firstNumber} ${operator} ${lastNumber}`
}

numberButtonsList.forEach(button => button.addEventListener('click', (e) => {
    if (result) {
        result = "";
        operator = "";
        firstNumber = "";
        lastNumber = "";
    }
    getNumberInput(e)
}))
operatorButtonsList.forEach(button => button.addEventListener('click', (e) => {
    if (result) {
        firstNumber = result;
        result = "";
        lastNumber = "";
        operator = ""
    }
    operatorClick(e)
}))
equalsSign.addEventListener('click', () => equalClick())