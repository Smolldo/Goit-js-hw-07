const nameIn = document.querySelector('#name-input');
const greeting = document.querySelector('#name-output');

const onInput = (event) => {
    const eventValue = event.currentTarget.value;
    eventValue ?
        greeting.textContent = eventValue :
        greeting.textContent = 'Незнакомец';

};
nameIn.addEventListener('input', onInput);