const lengthInput = document.getElementById('length');
const generateButton = document.getElementById('generate');
const passwordDisplay = document.getElementById('password');
const lowercaseCheckbox = document.getElementById('lowercase');
const uppercaseCheckbox = document.getElementById('uppercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');


generateButton.addEventListener('click', generatePassword);
function generatePassword() {
    const length = parseInt(lengthInput.value, 10);
    if (isNaN(length) || length < 4 || length > 32) {
        displayError("Длина пароля должна быть от 4 до 32 символов.");
        return;
    }
    let charSet = "";
    if (lowercaseCheckbox.checked) charSet += "abcdefghijklmnopqrstuvwxyz";
    if (uppercaseCheckbox.checked) charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numbersCheckbox.checked) charSet += "0123456789";
    if (symbolsCheckbox.checked) charSet += "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    if (charSet === "") {
        displayError("Выберите хотя бы один тип символов.");
        return;
    }
    let password = '';
    for (let i = 0; i < length; i++) {
        password += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }
    passwordDisplay.textContent = password;
    passwordDisplay.style.color = "initial"; 
}

function displayError(message) {
    passwordDisplay.textContent = message;
    passwordDisplay.style.color = "red";
}

