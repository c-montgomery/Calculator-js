/* Add a function that puts buttonpressed attributes to false except the one being pressed. Add a condition
if they aren't pressed, and if they are pressed, numbers should be added to the otherNumber array. If there are items in both the 
first number, an operator being pressed is true and there's a second number, the solved equation integer should be displayed, and then
moved to the firstNumber array  ---can't think of a reason it needs to be split, so adding the complete number to array[0] should be fine  
---consider conolidating the  buttonPressed and operatorPressed functions\
---Do the math functions need to be discreet or can they be added to the solve function?
---Do I need individual operator booleans? or can there be a universal operator isPressed boolean?
---complete solvedReset function, which adds the solution to an equation to the firstNumber variable, clears the operator and otherNumber*/



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
let operatorIsPressed = false

//create equation variables object
let displayString = {
    firstNumber: [],
    operator: '',
    otherNumber: [],
}

//handles button presses, appends to displayString[firstNumber]
function buttonPress(e) {
    if (!operatorIsPressed) {
        displayString['firstNumber'].push(e.target.innerText);
        console.log(displayString['firstNumber']);
        updateDisplay('number');
    } else {
        console.log('statemetn else\'d')
        displayString['otherNumber'].push(e.target.innerText);
        updateDisplay('number')
    }
}

//function for handling operator presses
function operatorPress(e) {
    operatorIsPressed = true;
    if (e.target.innerText !== '=') {
        console.log('in operator press')
        console.log(e)
        displayString['operator'] = e.target.innerText
        console.log(displayString['operator'])
        updateDisplay('symbol');
    } else {
        display.textContent = solve();
    }
}

//function updates display depending on type of button press
function updateDisplay(value){
    console.log('in updateDisplay')
    console.log(value)
    if (value == 'number' && operatorIsPressed == false){
        console.log('in first if')
        if (displayString.firstNumber.length < 9) {
            display.textContent = displayString['firstNumber'].join('');
        }
    } else if (value == 'number' && operatorIsPressed === true){
        
        console.log('operator pressed and update entered')
        display.textContent = displayString['otherNumber'].join('');
    } else if (value == 'symbol'){
        console.log('in symbol')
        display.textContent = displayString['operator']
    }else{
        console.log('no values matched')
    }  
}


//checks size of otherNumber, and performs appropriate operation
function solve() {
    if (displayString.otherNumber.length != 0) {
        switch (displayString.operator) {
            case '+':
                console.log('dis')
                return addNumbers(parseInt(displayString.firstNumber.join('')), parseInt(displayString.otherNumber.join('')));
                
                break;
            case '-':
                subtractNumbers(parseInt(displayString.firstNumber.join('')), parseInt(displayString.otherNumber.join('')))

                break;
            case '\00F7':
                divideNumbers(displayString.firstNumber.join(''), displayString.otherNumber.join(''))
                break;
            case '*':
                multiplyNumbers(displayString.firstNumber.join(''), displayString.otherNumber.join(''))
                break;
        }

    }
}

function addNumbers(first, second) {
    let total = (parseInt(first)+parseInt(second));
    console.log('vvvvvvv')
    console.log(typeof total)
    return total;
}
function subtractNumbers(first, second) {
    return first -second;
}
function divideNumbers(first, second) {
    return parseInt(first) / parseInt(second);
}
function multiplyNumbers(first, second) {
    return parseInt(first) * parseInt(second);
}

function solvedReset(){

}
