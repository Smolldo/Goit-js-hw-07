const counterValueRef = document.querySelector('#value');
let counterValue = counterValueRef.textContent;


const decrementButtonRef = document.querySelectorAll('#counter button')[0];
const incrementButtonRef = document.querySelectorAll('#counter button')[1];


incrementButtonRef.addEventListener('click', increment);


function increment  () {
    const numOfCounterValueRef = Number(counterValueRef.textContent);
    counterValueRef.textContent = numOfCounterValueRef + 1;
    return counterValue;
}

decrementButtonRef.addEventListener('click', decrement);

function decrement() {
    counterValueRef.textContent -= 1;
    return counterValue;
}