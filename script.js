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
        console.log(value);
    }else{
        display.innerText += value;
    }
}