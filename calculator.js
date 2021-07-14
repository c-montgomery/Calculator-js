let one = document.querySelector('.one')
one.addEventListener('click', buttonPress)

let display = document.querySelector('.display');


let displayString = {
    number: [],
    operator: '',
    otherNumber: [],
}

function buttonPress(e){
    console.log(e.which)
    displayString['number'].push(e.which);
    console.log(displayString['number']);
    updateDisplay();
}

function updateDisplay() {
    display.textContent = displayString['number'].join('');
}