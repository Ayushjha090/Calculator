let display = document.getElementById('display');
let buttons = document.getElementsByClassName('button');
let operand1 = 0;
let operand2 = null;
let operator = null;

for(let btn of buttons){
    btn.addEventListener('click', ()=>{
        let value = btn.getAttribute('data-value');
        calculator(value);
    });
}

function calculator(value){
    if(value == '+' || value == '-' || value == '*' || value == '/'){
        // Fetching the operand1 and operator
        operand1 = parseFloat(display.textContent);
        operator = value;
        display.innerText = "";
    }else if(value == '%'){
        // Calculate the percentage
        operand1 = parseFloat(display.textContent);
        display.innerText = "";
        operand1 = operand1/100;
        display.innerText = operand1;
    }else if(value == '+/-'){
        // Converts positive number to negative number and vice-versa
        operand1 = parseFloat(display.textContent);
        operand1 = (-1)*operand1;
        display.innerText = operand1;
    }else if(value == '='){
        // Calculates the expression value by fetching operand2
        operand2 = parseFloat(display.textContent);
        display.innerText = "";
        operand1 = evaluateExpression(operand1, operand2, operator);
        if(operand1 != 'Error'){
            operand1 = Math.round(operand1*100)/100;
        }
        display.innerText = operand1;
    }else if(value == 'AC'){
        // Clears the display of the Calculator
        display.innerText = "";
    }else{
        // Appends numeric values to the display
        display.innerText += value;
    }
}

function evaluateExpression(operand1, operand2, operator){
    let expression = operand1 + " " + operator + " " + operand2;
    let value = eval(expression);
    // Check condition for Divide by zero error
    if(value == 'Infinity' || isNaN(value)){
        return 'Error';
    }
    return value;
}