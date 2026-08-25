"use strict";

//affichade l'aside et masquer

const menuHamburger = document.querySelector(".menu-hamburger-nav");
const btnCloseAside = document.querySelector(".close-aside");

function afficherAside() {
  const aside = document.querySelector(".side-bar");
  aside.classList.add("asideActive");
}

function masquerAside() {
  const aside = document.querySelector(".side-bar");
  if (aside.classList.contains("asideActive"))
    aside.classList.remove("asideActive");
}

menuHamburger.addEventListener("click", afficherAside);
btnCloseAside.addEventListener("click", masquerAside);

//afficher le dashboard par defaut

const arrayBtnsAside = Array.from(document.querySelectorAll(".btns-aside button"));
const arrayDisplayZones = Array.from(document.querySelectorAll(".display-zone"));

function affichageDashboard() {

  for (let btn of arrayBtnsAside) {
    if (btn.getAttribute("aria-current")) {
      const posBtn = arrayBtnsAside.indexOf(btn);
      arrayDisplayZones[posBtn].classList.add("sectionActive");
      console.log(posBtn);
    }
  }
}

affichageDashboard();

//afficher les section de l'aside

function afficherDisplayZone(buttonClique) {

  for (let btn of arrayBtnsAside) {

    if (btn.getAttribute("aria-current")) {
      btn.setAttribute("aria-current", false);
      const posBtn = arrayBtnsAside.indexOf(btn);
      arrayDisplayZones[posBtn].classList.remove("sectionActive");
    }

  }

  buttonClique.setAttribute("aria-current", true);
  const positionButton = arrayBtnsAside.indexOf(buttonClique);
  arrayDisplayZones[positionButton].classList.add("sectionActive");

}

//ecouter les evenements sur l'aside

const btnsAside = document.querySelector(".btns-aside");

btnsAside.addEventListener("click", (event) => {
  const elt = event.target;
  if (!elt) return;
    const btnClique = event.target.closest("button");
  afficherDisplayZone(btnClique);
  masquerAside()
});
