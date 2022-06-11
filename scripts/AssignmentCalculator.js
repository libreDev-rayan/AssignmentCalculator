function add(num1, num2){
    return num1 + num2

}
function subtract(num1, num2){
    return num1 - num2
}
function multiply(num1, num2){
    return num1 * num2
}
function divide(num1, num2){
    return num2 ===0 ? 'cannot divided by zero'
    : num1/num2;
}

function operate(operator, num1, num2){   
    num1 = document.getElementById("result").value;
    num2 = document.getElementById("result").value = num2;
    
    if (operator == "+") {
        return multiply(num1, num2)
    }
    if (operator == "-") {
        return multiply(num1, num2)
    }
    if (operator == "%") {
        return multiply(num1, num2)
    }    
    if (operator=="*"){
        return multiply(num1, num2)
    }
}
function clearScreen() {
    document.getElementById("result").value = "";
}

function display(value) {
    if (value === "+" ){
        operate(value, num1, num2) // can not work
    }
    if (value === "-") {
        operate(value, num1, num2) // can not work
    }
    if (value === "%") {
        operate(value, num1, num2) // can not work
    }
    if (value === "*") {
        operate(value, num1, num2) // can not work
    }
    document.getElementById("result").value += value;
}




















