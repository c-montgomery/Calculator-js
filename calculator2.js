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
let add = document.querySelector('.add');
let subtract = document.querySelector('.subtract');

//clear button
let clear = document.querySelector('.clear');

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
equals.addEventListener('click', equalsPress);
multiply.addEventListener('click', operatorPress);
divide.addEventListener('click', operatorPress);
add.addEventListener('click', operatorPress);
subtract.addEventListener('click', operatorPress);

//clear event listener
clear.addEventListener('click', clearDisplayString);

//grab display
let display = document.querySelector('.display');

let data = {
    firstList = [],
    secondList = [],
    operator = [],
}

let joined = (list) => {
    if (list.length > 1){
        return parseInt(list.join(''))
    }else if (list.length = 1) {
        return list[0];
        
    }
}