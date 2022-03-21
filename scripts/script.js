let firstNumber, lastNumber, firstResult, finalResult;
const numberButtonsList = document.querySelectorAll('.number-button')

const add = (a, b) => a + b
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate =  (operator, a, b) => {
    operator === '+' ? add(a, b):
    operator === '-' ? subtract(a, b):
    operator === '*' ? multiply(a, b):
    operator === '/' ? divide (a, b): null
}

const getNumberInput = function (e) {
    let inputNumber = e.currentTarget.innerText
}

numberButtonsList.forEach(button => button.addEventListener('click', (e) => getNumberInput(e)))