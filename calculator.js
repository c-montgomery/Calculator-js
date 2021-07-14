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

let display = document.querySelector('.display')

let add = false;
let subtract = false;
let multiply = false;
let divide = false;







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
    updateDisplay();
}

function updateDisplay() {
    display.textContent = displayString['firstNumber'].join('');
}

function solve(){

}