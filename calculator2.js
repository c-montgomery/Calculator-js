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
clear.addEventListener('click', clearAll);

//grab display
let display = document.querySelector('.display');

let data = {
    firstList: [],
    secondList: [],
    operator: [],
    firstFilled: false,
    secondFilled: false,
    operatorIncrement: 0,
}

function buttonPress(e) {
    if (data.operator.length == 0) {
        data.firstList.push(e.target.innerText);
        display.textContent = data.firstList.join('');
    } else {
        data.secondList.push(e.target.innerText)
        display.textContent = data.secondList.join('');
    }
}
function operatorPress(e) {
    data.operator = e.target.innerText
    if (data.operator.length > 0 && data.firstList.length > 0 && data.secondList.length > 0){
        let result  = Number(solve());
        data.firstList = [];
        data.firstList.push(result);
        data.secondList = [];
        
        display.textContent = data.firstList.join('');
    } else if (data.operator.length == 0 && data.secondList.length == 0) {
        data.operator = (e.target.innerText);
    }
    
}

function equalsPress(e) {
    data.operatorIncrement = 0;
    if (data.firstList.length !== 0 && data.secondList.length !== 0 && data.operator.length !== 0) {
        display.textContent = solve();
        clearDataValues();
        data.firstList.push(Number(display.textContent));
    }
}

function clearDataValues() {
    data = {
        firstList: [],
        secondList: [],
        operator: [],
    }
}
function solve(e) {
    data.operatorIncrement = 0;
    switch (data.operator[0]) {
        case '+':
            return parseInt(data.firstList.join('')) + parseInt(data.secondList.join(''));
            break;
        case '-':
            return parseInt(data.firstList) - parseInt(data.secondList);
            break;
        case 'x':
            return parseInt(data.firstList) * parseInt(data.secondList);
            break;
        case '÷':
            return parseInt(data.firstList) / parseInt(data.secondList);
            break;
    }
}
function clearAll(){
    display.textContent = '';
    data = {
        firstList: [],
        secondList: [],
        operator: [],
    }
}
