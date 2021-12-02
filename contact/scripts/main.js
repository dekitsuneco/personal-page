const inputName = document.getElementById('input-name');
const inputMail = document.getElementById('input-mail');
const inputMessage = document.getElementById('input-message');
const btnSubmit = document.querySelector('.submit-button');
const formContact = document.querySelector('.form');
const mailPattern = /\S+@\S+\.\S+/;

function checkInput() {
    let isBtnActive = false;
    if (inputName.value.trim() !== '' && 
        mailPattern.test(inputMail.value) && 
        inputMessage.value.trim() !== '') {
        isBtnActive = true;
        changeBtnMode(isBtnActive);
    } else {
        changeBtnMode(isBtnActive);
    }
}

function changeBtnMode(isBtnActive) {
    if (isBtnActive) {
        btnSubmit.style.backgroundColor = '#fa923f';
        btnSubmit.disabled = false;
    } else {
        btnSubmit.style.backgroundColor = '#979695';
        btnSubmit.disabled = true;
    }
}

function main() {
    inputName.addEventListener('input', checkInput);
    inputMessage.addEventListener('input', checkInput);
    inputMail.addEventListener('input', checkInput);
    formContact.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Submitted');
    });
}

main();
