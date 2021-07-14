//create digit buttons
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');
let zero = document.querySelector('.zero');

//create operator buttons
let equals = document.querySelector('.equals');
let multiply = document.querySelector('.multiply');
let divide = document.querySelector('.divide');
let add = document.querySelector('.add')
let subtract = document.querySelector('.subtract')

//add event listeners on digits
one.addEventListener('click', buttonPress);
two.addEventListener('click', buttonPress);
three.addEventListener('click', buttonPress);
four.addEventListener('click', buttonPress);
five.addEventListener('click', buttonPress);
six.addEventListener('click', buttonPress);
seven.addEventListener('click', buttonPress);
eight.addEventListener('click', buttonPress);
nine.addEventListener('click', buttonPress);
zero.addEventListener('click', buttonPress);

//add event listeners on operators
equals.addEventListener('click', operatorPress)
multiply.addEventListener('click', operatorPress)
divide.addEventListener('click', operatorPress)
add.addEventListener('click', operatorPress)
subtract.addEventListener('click', operatorPress)

//grab display
let display = document.querySelector('.display')

//boolean variables 
let addButtonPressed = false;
let subtractButtonPressed = false;
let multiplyButtonPressed = false;
let divideButtonPressed = false;

//create equation variables object
let displayString = {
    firstNumber: [],
    operator: '',
    otherNumber: [],
}

//handles button presses, appends to displayString[firstNumber]
function buttonPress(e){
    console.log(e)
    displayString['firstNumber'].push(e.target.innerText);
    console.log(displayString['firstNumber']);
    updateDisplay('number');
}

//updates display
function updateDisplay(value) {
    if(value === 'number'){
        if (displayString.firstNumber.length < 9){
        display.textContent = displayString['firstNumber'].join('');
        }
    }else if (value === 'symbol'){
        display.textContent = displayString.operator
    }
}

//checks size of otherNumber, and performs appropriate operation
function solve(){
    if (displayString.otherNumber.length != 0){
        switch(displayString.operator){
            case '+':
                addNumbers(displayString.firstNumber.join(''), displayString.otherNumber.join(''))
                break;
            case '-':
                subtractNumbers(displayString.firstNumber.join(''), displayString.otherNumber.join(''))
                break;
            case '/':
                divideNumbers(displayString.firstNumber.join(''), displayString.otherNumber.join(''))
                break;
            case '*':
                multiplyNumbers(displayString.firstNumber.join(''), displayString.otherNumber.join(''))
                break;    
        }
        
        console.log(parseInt(displayString.firstNumber.join('')) + displayString.operator + parseInt(displayString.otherNumber.join('')) );
        return parseInt(displayString.firstNumber.join('')) + displayString.operator + parseInt(displayString.otherNumber.join('')); 
    }
}

function addNumbers(first, second){
    console.log()
    return parseInt(first)+parseInt(second);
}
function subtractNumbers(first, second){
    return parseInt(first)-parseInt(second);
}
function divideNumbers(first, second){
    return parseInt(first)/parseInt(second);
}
function multiplyNumbers(first, second){
    return parseInt(first)*parseInt(second);
}
//function for handling operator presses
function operatorPress(e){
    console.log(e)
    displayString['operator'] = e.target.innerText
    console.log(displayString['operator'])
    updateDisplay('symbol');
}