'use strict'

//permutation sur les formulaires
const authBtns = document.querySelector(".auth_buttons");
const authForms = document.querySelector(".auth_forms")

authBtns.addEventListener("click", () => {
    authBtns.classList.toggle("form_login_active")
    authForms.classList.toggle("form_active")
})