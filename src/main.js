
function main() {
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const submit = document.getElementById('submit');

    submit.addEventListener('click', (e) => {
        const firstVal = firstName.value;
        const lastVal = lastName.value;
        const emailVal = email.value;
        const passwordVal = password.value;
        const regexEmail = /^\w*[@]\w*[.]\w*$/ig;

        if (!firstVal) {
            firstName.classList.add('error');
            document.querySelector('.first-name-error').style.display = 'block';
            e.preventDefault();
        }
        else {
            firstName.classList.remove('error');
            document.querySelector('.first-name-error').style.display = 'none';
        }

        if (!lastVal) {
            lastName.classList.add('error');
            document.querySelector('.last-name-error').style.display = 'block';
            e.preventDefault();
        }
        else {
            lastName.classList.remove('error');
            document.querySelector('.last-name-error').style.display = 'none';
        }

        if (!passwordVal) {
            password.classList.add('error');
            document.querySelector('.password-error').style.display = 'block';
            e.preventDefault();
        }
        else {
            password.classList.remove('error');
            document.querySelector('.password-error').style.display = 'none';
        }

        if (!regexEmail.test(emailVal)) {
            email.classList.add('error');
            document.querySelector('.email-error').style.display = 'block';
            e.preventDefault();
        }
        else {
            email.classList.remove('error');
            document.querySelector('.email-error').style.display = 'none';
        }

    });




}






window.addEventListener('DOMContentLoaded', main);