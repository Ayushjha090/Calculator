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
    if(value == '+' || value == '-' || value == '*' || value == '/' || value == '=' || value == 'AC' || value == '+/-' || value == '%'){
        if(value == 'AC'){
            display.innerText = "";
        }else if(value == '+/-'){
            operand1 = parseFloat(display.textContent);
            operand1 = (-1) * operand1;
            display.innerText = operand1;
        }
        else{
            switch (value) {
                case '+':
                    operand1 = parseFloat(display.textContent);
                    display.innerText = "";
                    operator = '+';
                    break;
                case '-':
                    operand1 = parseFloat(display.textContent);
                    display.innerText = "";
                    operator = '-';
                    break;
                case '*':
                    operand1 = parseFloat(display.textContent);
                    display.innerText = "";
                    operator = '*';
                    break;
                case '/':
                    operand1 = parseFloat(display.textContent);
                    display.innerText = "";
                    operator = '/';
                    break;
                case '=':
                    operand2 = parseFloat(display.textContent);
                    display.innerText = "";
                    let displayVal = evaluateExpression(operand1, operand2, operator);
                    display.innerText = displayVal;
                default:
                    break;
            }

        }  
    }else{
        display.innerText += value;
    }
}

function evaluateExpression(operand1, operand2, operator){
    let expression = operand1 + " " + operator + " " + operand2;
    let value = eval(expression);
    if(value == 'Infinity'){
        return 'Error';
    }
    return value;
}