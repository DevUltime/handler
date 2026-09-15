const tabs = document.getElementById('tabs');
const tabSignin = document.getElementById('tab-signin');
const tabSignup = document.getElementById('tab-signup');
const formSignin = document.getElementById('form-signin');
const formSignup = document.getElementById('form-signup');

function showForm(name) {
    const isSignup = name === 'signup';

    tabs.classList.toggle('signup-active', isSignup);

    tabSignin.classList.toggle('active', !isSignup)
    tabSignup.classList.toggle('active', isSignup)

    formSignin.classList.toggle('visible', !isSignup);
    formSignin.classList.toggle('hidden', isSignup);
    formSignup.classList.toggle('visible', isSignup);
    formSignup.classList.toggle('hidden', !isSignup);

}

tabSignin.addEventListener('click', () => showForm('signin'));
tabSignup.addEventListener('click', () => showForm('signup'));

document.querySelectorAll('.switch-button').forEach(function (button){
button.addEventListener('click', () => showForm(button.dataset.target));

})