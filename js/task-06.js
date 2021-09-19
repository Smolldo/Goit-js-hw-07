const valInput = document.querySelector('#validation-input');


const onInputBlur = (event) => {
let eventLength = event.currentTarget.value.length;

let currentLength = Number(valInput.dataset.length);

 eventLength !==  currentLength ? toggle('invalid', 'valid') : toggle('valid', 'invalid');
}

valInput.addEventListener('blur', onInputBlur);

const toggle = (add, remove) =>{
    valInput.classList.remove(remove);
    valInput.classList.add(add);
}