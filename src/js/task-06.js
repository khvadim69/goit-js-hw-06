// const validationInput = document.querySelector("#validation-input");
// validationInput.addEventListener("blur", () => {
//   validationInput.classList.toggle("valid", validationInput.value.length >= 6);
//   validationInput.classList.toggle("invalid", validationInput.value.length < 6);
// });
const refs = {      
    dataIn: document.querySelector('#validation-input'),
}

refs.dataIn.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
event.currentTarget.value.length <= refs.dataIn.dataset.length ?
        event.currentTarget.classList.add('valid') : 
        event.currentTarget.classList.add('invalid')
};