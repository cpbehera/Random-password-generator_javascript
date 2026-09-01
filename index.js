const btnEl = document.querySelector('.btn');
const inputEl = document.querySelector('.input');
const copyEl = document.querySelector('.fa-copy');
const alertContainerEl = document.querySelector('.alert-container');

btnEl.addEventListener('click', () => {
    createPassword();
});

const createPassword = () => {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let password = '';
    const passwordLength = 10;

    for (let i = 0; i < passwordLength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    inputEl.value = password;

}

copyEl.addEventListener('click', () => {
    copyPassword();
    alertContainerEl.classList.add('active');
    setTimeout(() => {
        alertContainerEl.classList.remove('active');
    }, 2000);
});

const copyPassword = () => {
    inputEl.select();
    inputEl.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(inputEl.value);
}