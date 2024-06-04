let tempNumber = [];
let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";
const display = document.querySelector('.display');
const equalsButton = document.querySelector('.equals');
const numbersButton = document.querySelectorAll('.number');
const operatorsButton = document.querySelectorAll('.operator')
const clearButton = document.querySelector('.clear');
const floatButton = document.querySelector('.float')

numbersButton.forEach((number)=>{
        number.addEventListener('click', ()=>{
            if(tempNumber.length == 17){
                // DO NOTHING
            }
            else{
                tempNumber.push(number.textContent);
                display.textContent = tempNumber.join("");
            }
        })
})
floatButton.addEventListener('click', ()=>{
    if (tempNumber.includes(".")){
        // DO NOTHING
    }
    else{
        tempNumber.push(floatButton.textContent);
        display.textContent = tempNumber.join("");
    }
})

operatorsButton.forEach((operators)=>{
    operators.addEventListener('click', ()=>{
        if (operator === "" && firstNumber === ""){
            operator = operators.textContent;
            firstNumber = tempNumber.join("")
            tempNumber.length = 0;
            console.log(firstNumber);
        }
        else if (operator === "" && firstNumber != ""){
            operator = operators.textContent;
        }
        else if(operator != ""){
            secondNumber = tempNumber.join("");
            operate();
            tempNumber.length = 0;
            display.textContent = result;
            firstNumber = result;
            operator = operators.textContent;
        }
    })
})

equalsButton.addEventListener('click', ()=>{
    if(firstNumber != "" && operator != "" && tempNumber.length != 0){
        secondNumber = tempNumber.join("");
        operate();
        tempNumber.length = 0;
        display.textContent = result;
        firstNumber = result
        secondNumber = "";
        operator = "";
    }
    else{
        // do nothing
    }
});

clearButton.addEventListener('click', ()=>{
    tempNumber.length = 0;
    firstNumber = "";
    secondNumber = "";
    operator = "";
    display.textContent = "";
})

add = (num,num1) => +num + +num1;
substract = (num, num1) => +num - +num1;
multiply = (num, num1) => num * num1;
divide = (num, num1) => num/num1;

function operate(){
    if(operator === '+'){
        result = add(firstNumber,secondNumber);
    }
    else if(operator === '-'){
        result = substract(firstNumber,secondNumber);
    }
    else if(operator === 'x'){
        result = multiply(firstNumber,secondNumber);
    }
    else if(operator === '/'){
        if(secondNumber == '0' || secondNumber == 0){
            alert("Dont be stupid!")
            result = 1;
        }
        else result = divide(firstNumber,secondNumber).toFixed(2);
    }
    else alert('invalid operator');
}