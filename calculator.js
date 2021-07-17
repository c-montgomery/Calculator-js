/* Add a condition
if they aren't pressed, and if they are pressed, numbers should be added to the otherNumber array. If there are items in both the 
first number, an operator being pressed is true and there's a second number, the solved equation integer should be displayed, and then
moved to the firstNumber array  ---can't think of a reason it needs to be split, so adding the complete number to array[0] should be fine  
---consider conolidating the  buttonPressed and operatorPressed functions\
---Do the math functions need to be discreet or can they be added to the solve function?
---complete solvedReset function, which adds the solution to an equation to the firstNumber variable, clears the operator and otherNumber
---Add button highlighting*/



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
let operatorButtons = document.querySelectorAll('.operator')
console.log(operatorButtons)

//create operator buttons
let equals = document.querySelector('.equals');
let multiply = document.querySelector('.multiply');
let divide = document.querySelector('.divide');
let add = document.querySelector('.add')
let subtract = document.querySelector('.subtract')

//clear button
let clear = document.querySelector('.clear')

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
equals.addEventListener('click', equalsPress)
multiply.addEventListener('click', operatorPress)
divide.addEventListener('click', operatorPress)
add.addEventListener('click', operatorPress)
subtract.addEventListener('click', operatorPress)

//clear event listener
clear.addEventListener('click', clearDisplayString)

//grab display
let display = document.querySelector('.display')

//boolean variable
let operatorIsPressed = false

//create equation variables object
let displayString = {
    firstNumber: [],
    operator: '',
    otherNumber: [],
    solution: '',
    isSolved: false,
}

//function updates display depending on type of button press
function updateDisplay(value) {

    if (value == 'number' && operatorIsPressed === false) {

        if (displayString.firstNumber.length < 9) {
            display.textContent = displayString['firstNumber'].join('');
        }
    } else if (value == 'number' && operatorIsPressed === true) {
        display.textContent = displayString['otherNumber'].join('');
    } else if (value == 'symbol') {
        display.textContent = displayString['operator']
    } else {
        display.textContent = '';
    }
}

function equalsPress(e){
    if (displayString.firstNumber.length !=0 && displayString.otherNumber.length != 0 && displayString.operator.length !=0){
        displayString.solution = solve();
    }
}

function operatorPress(e){
    if (displayString.solution){
        displayString.firstNumber = [displayString.solution];
        display.solution = '';
        
        displayString.otherNumber = [];
        displayString.otherNumber = e.target.innerText;
    }
    if (displayString.firstNumber.length != 0 && displayString.otherNumber.length !=0){
    solve()
    
    displayString.operator = e.target.innerText
    } else if (displayString.operator.length == 0){
        displayString.operator = e.target.innerText;
    }

}
function buttonPress(e){
    if (!displayString.solution){
        if (displayString.firstNumber.length != 0 && displayString.operator.length !=0){
            displayString.otherNumber.push(e.target.innerText);
            display.textContent = displayString.otherNumber.join('');
        }else if (!displayString.operator){
            displayString.firstNumber.push(e.target.innerText);
            display.textContent = displayString.firstNumber.join('');
        }
    } else {
        displayString.firstNumber = e.target.innerText;
        if (displayString.firstNumber.length == 1){
        display.textContent = displayString.firstNumber[0];
        displayString.otherNumber = [];
        }
        
        if (displayString.firstNumber.length !=0 && displayString.operator.length !=0){
            displayString.otherNumber.push(e.target.innerText);
            display.textContent = displayString.otherNumber.join('');
        }else if (displayString.operator){
            displayString.firstNumber.push(e.target.innerText);
            display.textContent = displayString.firstNumber.join('');
        }
        
    }
}


    //checks size of otherNumber, and performs appropriate operation
    function solve() {
        if (displayString.firstNumber.length !== 0 && displayString.otherNumber !== 0){
            let solution = '';
            if (displayString.otherNumber.length != 0) {
                switch (displayString.operator) {
                    case '+':
                        if (displayString.firstNumber.length != 1 && displayString.firstNumber.length != 1){
                        solution = addNumbers(parseInt(displayString.firstNumber.join('')), parseInt(displayString.otherNumber.join('')));
                        display.textContent = solution;
                        
                        displayString.solution = solution;
                        solvedReset(solution);
                        return solution;
                        } else if displays
                    // break;
                    case '-':
                        solution = subtractNumbers(parseInt(displayString.firstNumber.join('')), parseInt(displayString.otherNumber.join('')))
                        display.textContent = solution;
                        solvedReset(solution);
                        displayString.solution = solution;
                        return solution;
                        break;
                    case '\00F7':
                        solution = divideNumbers(parseInt(displayString.firstNumber.join('')), parseInt(displayString.otherNumber.join('')))
                        display.textContent = solution;
                        solvedReset(solution);
                        displayString.solution = solution;
                        return solution;
                        break;
                    case 'x':
                        solution = multiplyNumbers(parseInt(displayString.firstNumber.join('')), parseInt(displayString.otherNumber.join('')))
                        display.textContent = solution;
                        solvedReset(solution);
                        displayString.solution = solution;
                        return solution;
                        break;
                    default:
                        console.log('Oh, this is a problem')
                }

            }
        }
    }

    function addNumbers(first, second) {
        let total = (parseInt(first) + parseInt(second));
        return total;
    }
    function subtractNumbers(first, second) {
        return first - second;
    }
    function divideNumbers(first, second) {
        return parseInt(first) / parseInt(second);
    }
    function multiplyNumbers(first, second) {
        return parseInt(first) * parseInt(second);
    }

    function solvedReset(solution) {

        displayString['firstNumber'] = [];
        displayString['solution'] = [];
        displayString['solution'].push(solution);
        displayString['otherNumber'] = [];
        displayString.operator = ''
    }

    function clearDisplayString() {

        displayString = {
            firstNumber: [],
            operator: '',
            otherNumber: [],
        }
        updateDisplay('clear');
    }