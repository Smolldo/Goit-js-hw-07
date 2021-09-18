const valInput = document.querySelector('#validation-input');


const onInputBlur = (event) => {
event.currentTarget.value.length !== Number(valInput.dataset.length) ?
valInput.classList.add('invalid') : valInput.classList.remove('invalid', 'valid');
}

valInput.addEventListener('blur', onInputBlur);