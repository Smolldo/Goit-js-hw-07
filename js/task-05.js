const nameIn = document.querySelector('#name-input');
const greeting = document.querySelector('#name-output');

nameIn.addEventListener('input', onInput);

function onInput(event) {

    event.currentTarget.value ?
        greeting.textContent = event.currentTarget.value :
        greeting.textContent = 'Незнакомец'

};