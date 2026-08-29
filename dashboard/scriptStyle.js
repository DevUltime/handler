"use strict";

//affichade l'aside et masquer

function afficherAside() {
  const aside = document.querySelector(".side-bar");
  aside.classList.add("asideActive");
}

function masquerAside() {
  const aside = document.querySelector(".side-bar");
  if (aside.classList.contains("asideActive"))
    aside.classList.remove("asideActive");
}

//afficher le dashboard par defaut

const arrayBtnsAside = Array.from(
  document.querySelectorAll(".btns-aside button"),
);
const arrayDisplayZones = Array.from(
  document.querySelectorAll(".display-zone"),
);

function affichageDashboard() {
  for (let btn of arrayBtnsAside) {
    if (btn.getAttribute("aria-current")) {
      const posBtn = arrayBtnsAside.indexOf(btn);
      arrayDisplayZones[posBtn].classList.add("sectionActive");
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

  masquerAside();
});

//integration du graphique dashboard

const data = {
  labels: ["Eval 1", "Eval 2"],
  datasets: [
    {
      data: [75],
      label: ["eval 1"],
      backgroundColor: ["#52A5FF"],
      borderWidth: 0,
      borderRadius: 15,
    },
    {
      data: [1],
      label: ["eval 2"],
      backgroundColor: ["#daff85"],
      borderWidth: 0,
      borderRadius: 15,
    },
  ],
};

const config = {
  type: "doughnut",
  data: data,
};

const ctxDashboard = document.querySelector("#chart-dashboard");
const chartDasboard = new Chart(ctxDashboard, config);

//afficher et masquer le formulaire d'ajout d'un eleve

function afficherFormulaireAjoutEleve() {
  const form = document.querySelector(".container-form-add-student");
  form.classList.add("formActive");
}
function masquerFormulaireAjoutEleve() {
  const form = document.querySelector(".container-form-add-student");
  form.classList.remove("formActive");
}

function masquerContainerFormAjouterEleve(event) {
  const eltClicked = event.target;
  if (eltClicked === event.currentTarget) masquerFormulaireAjoutEleve();
}

//afficher et masquer les modals

function afficherModal(modal) {
  modal.classList.add("modalActive");
}

function masquerModal(modal) {
  modal.classList.remove("modalActive");
}

//afficher les informations sur un eleve (secction myStudent)

function afficherINformationElevemyStudent(event) {
  const elt = event.target;
  if (!elt) return;
  const containerModalInformationMyStudent = document.querySelector(
    ".container-modal-informations-myStudent",
  );
  afficherModal(containerModalInformationMyStudent);
}

function masquerContainerModal(event) {
  const eltClicked = event.target;
  if (eltClicked === event.currentTarget) masquerModal(event.currentTarget);
}

function afficherModalSuppresionEleveMyStudent() {
  const containerModalSuppressionEleveMyStudent = document.querySelector(
    ".container-modal-suppression-eleve-myStudent",
  );
  afficherModal(containerModalSuppressionEleveMyStudent);
}

function afficherModalModificationEleveMyStudent() {
  const containerFormEditStudent = document.querySelector(
    ".container-form-edit-student",
  );
  afficherModal(containerFormEditStudent);
}
