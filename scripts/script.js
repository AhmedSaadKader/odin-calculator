let firstNumber, lastNumber, operator, result;
const numberButtonsList = document.querySelectorAll('.number-button')
const operatorButtonsList = document.querySelectorAll('.operator-button')
const display = document.querySelector('#display')
const upperDisplay = document.querySelector('#upper-display')
const lowerDisplay = document.querySelector('#lower-display')
const equalsSign = document.querySelector('#Enter')
const clearButton = document.querySelector('#Escape')

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

const getNumberInput = function (inputValue) {
    !operator ? (!firstNumber)          ? (firstNumber = "" + inputValue,
                                            lowerDisplay.innerText = firstNumber)                     :
                (firstNumber.length < 8)? (firstNumber = firstNumber + inputValue,
                                            lowerDisplay.innerText = firstNumber)                     :
                null:
    operator  ? (!lastNumber)           ? (lastNumber = "" + inputValue, 
                                            lowerDisplay.innerText = lastNumber,
                                            upperDisplay.innerText = firstNumber + ' ' + operator)          :
                (lastNumber.length < 8) ? (lastNumber = lastNumber + inputValue,
                                            lowerDisplay.innerText = lastNumber,
                                            upperDisplay.innerText = firstNumber + ' ' + operator)    :
                null:
    null; 
}

const operatorClick = (inputValue) => {
    operator = inputValue;
    upperDisplay.innerText = firstNumber + ' ' + operator;
    lowerDisplay.innerText = '';
}

const equalClick = () => {
    operate(operator, parseInt(firstNumber), parseInt(lastNumber));
    if (!result || result === Infinity) {
        reset()
        lowerDisplay.innerText = "Error, can't do that!";
    } else {
        lowerDisplay.innerText = result;
        upperDisplay.innerText = `${firstNumber} ${operator} ${lastNumber}`
    }
}

const handleNumberPress = function (e) {
    if (result) {
        result = "";
        operator = "";
        firstNumber = "";
        lastNumber = "";
    }
    getNumberInput(e)
}

const handleOperatorPress = function (e) {
    if (!firstNumber) { 
        firstNumber = inputValue
        lowerDisplay.innerText = firstNumber
        return
    }
    if (operator && lastNumber) { equalClick()}
    if (result) {
        firstNumber = result;
        result = "";
        lastNumber = "";
        operator = ""
    }
    operatorClick(e)
}

const reset = function () {
    firstNumber = "", lastNumber = "", operator = "", result = ''
    lowerDisplay.innerText = '';
    upperDisplay.innerText = ''
}

numberButtonsList.forEach(button => button.addEventListener('click', (e) => handleNumberPress(e.currentTarget.innerText)))
operatorButtonsList.forEach(button => button.addEventListener('click', (e) => handleOperatorPress(e.currentTarget.innerText)))
equalsSign.addEventListener('click', () => equalClick())
clearButton.addEventListener('click', () => reset())

// keyboard input
document.addEventListener('keydown', (e) => {
    numberButtonsList.forEach((button) =>{
        if(button.getAttribute('id') === e.key){
            console.log(button.getAttribute('id'), e.key)
            handleNumberPress(button.innerText)
        }
    })
})
document.addEventListener('keydown', (e) =>{
    operatorButtonsList.forEach((button) => {
        if(button.getAttribute('id') === e.key){
            console.log(button.getAttribute('id'), e.key)
            handleOperatorPress(button.innerText)
        }
    })
})

document.addEventListener('keydown', (e) => {
    console.log(e.key)
    if (equalsSign.getAttribute('id') === e.key) {
        equalClick()
    }
})

document.addEventListener('keydown', (e) => {
    if (clearButton.getAttribute('id') === e.key) {
        reset()
    }
})