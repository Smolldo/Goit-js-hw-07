const valInput = document.querySelector('#validation-input');


const onInputBlur = (event) => {
event.currentTarget.value.length !== Number(valInput.dataset.length) ?
toggle('invalid', 'valid') : toggle('valid', 'invalid');
}

valInput.addEventListener('blur', onInputBlur);

const toggle = (add, remove) =>{
    valInput.classList.remove(remove);
    valInput.classList.add(add);
}