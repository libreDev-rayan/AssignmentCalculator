let aaa = ''
let bbb = ''

function add(num1, num2) {
    return num1 + num2
}
function subtract(num1, num2) {
    return num1 - num2
}
function multiply(num1, num2) {
    return num1 * num2
}
function divide(num1, num2) {
    return num2 === 0 ? 'cannot divided by zero' : num1 / num2
}

function operate(operator, num1, num2) {
    operator = aaa
    console.log(aaa)
    num1 = parseInt(document.getElementById('result').value)
    num2 = 1

    if (operator === '+') {
        return add(num1, num2)
    }
    if (operator === '-') {
        return subtract(num1, num2)
    }
    if (operator === '%') {
        return divide(num1, num2)
    }
    if (operator === '*') {
        return multiply(num1, num2)
    }
}
function clearScreen() {
    document.getElementById('result').value = ''
}

function display(value, proces) {
    proces ? (aaa = proces) : null
    console.log(aaa, proces)
    document.getElementById('result').value += value
}


function equals(value, proces) {
    display.innerText = eval(display.innerText)
}

















