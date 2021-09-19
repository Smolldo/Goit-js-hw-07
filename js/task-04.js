let counterValue = document.querySelector('#value');


const incrementButton = document.querySelector('#counter button[data-action="increment"]');
const decrementButton = document.querySelector('#counter button[data-action="decrement"]');
let initialValue = 0;

const increment = () => {
counterValue.textContent = initialValue += 1;
return counterValue;
}


const decrement = () => {
    counterValue.textContent = initialValue -= 1;
    return counterValue;
}

incrementButton.addEventListener('click', increment);
decrementButton.addEventListener('click', decrement);

