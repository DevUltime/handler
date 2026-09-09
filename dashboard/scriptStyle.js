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
// arrayDisplayZones[3].classList.add("sectionActive")

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
      data: [75, 45],
      label: ["evaluation"],
      backgroundColor: ["#52A5FF", "#7dbcff"],
      borderRadius: 5,
    },
  ],

};

const config = {
  type: "bar",
  data: data,
  options: {
    animation: {
      y: {
        duration: 1000,
        easing: "easeOutQuart",
        from: (ctxDashboard) => ctxDashboard.chart.scales.y.bottom,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        display: false,
      },
    },
  },
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

function masquerContainerModal(event) {
  const eltClicked = event.target;
  if (eltClicked === event.currentTarget) masquerModal(event.currentTarget);
}

//afficher les informations sur un eleve (secction myStudent)

function afficherINformationElevemyStudent(event) {

  const elt = event.target;
  if (!elt) return;
  const container = document.querySelector(".container-modal-informations-myStudent",);
  afficherModal(container);

}

function afficherModalSuppresionEleveMyStudent() {

  const container = document.querySelector(".container-modal-suppression-eleve-myStudent");
  afficherModal(container);
  
}

function masquerModalSuppresionEleveMyStudent() {

  const container = document.querySelector(".container-modal-suppression-eleve-myStudent");
  masquerModal(container);
  
}

function afficherModalModificationEleveMyStudent() {
  const container = document.querySelector(".container-form-edit-student");
  afficherModal(container);
}

function masquerModalModificationEleveMyStudent() {
  const container = document.querySelector(".container-form-edit-student");
  masquerModal(container);
}



// afficher le modal pour la modification des notes (grades)
function afficherModalModificationNote(event) {

  const elt = event.target;
  if (!elt) return;
  const container = document.querySelector(".container-modal-modification-note-grades");

  afficherModal(container);
}

function masquerModalModificationNote() {
  const container = document.querySelector(".container-modal-modification-note-grades");
  masquerModal(container);
}




//afficher les tooltips de la navbar

function afficherTooltip(tooltip){
  tooltip.classList.add("tooltipActive")
}

function masquerTooltip(tooltip){
  tooltip.classList.remove("tooltipActive");
}

function afficherTooltipProfil(){

  const tooltipProfil = document.querySelector(".tooltip-profil");
  const tooltipNotification = document.querySelector(".tooltip-notifications");
  tooltipProfil.classList.toggle("tooltipActive");
  if(tooltipNotification.classList.contains("tooltipActive")) masquerTooltip(tooltipNotification);
  
}
function afficherTooltipNotification(){

  const tooltipProfil = document.querySelector(".tooltip-profil");
  const tooltipNotification = document.querySelector(".tooltip-notifications");
  tooltipNotification.classList.toggle("tooltipActive");
  if(tooltipProfil.classList.contains("tooltipActive")) masquerTooltip(tooltipProfil);

}
//masquer les tooltips de la navBar

function masquerTousLesTooltips() {

  const tooltipProfil = document.querySelector(".tooltip-profil");
  const tooltipNotification = document.querySelector(".tooltip-notifications");
  
  if (tooltipProfil.classList.contains("tooltipActive")) {
    masquerTooltip(tooltipProfil);
  }
  if (tooltipNotification.classList.contains("tooltipActive")) {
    masquerTooltip(tooltipNotification);
  }
}


document.addEventListener("click", (event) => {

  const navBar = document.querySelector(".nav-bar");
  const tooltipProfil = document.querySelector(".tooltip-profil");
  const tooltipNotification = document.querySelector(".tooltip-notifications");
  const asideBar = document.querySelector(".side-bar")
  
  if (!navBar.contains(event.target) && 
      !tooltipProfil.contains(event.target) && 
      !tooltipNotification.contains(event.target) &&
    !asideBar.contains(event.target)) {
    masquerTousLesTooltips();
  }
});

//changer la photo de profil

  const fileInput = document.querySelector('#input-photo-profil');

  fileInput.addEventListener('change', (event) => {
    const profilePreview = document.querySelectorAll('.photo-profil');
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        profilePreview.forEach((p) => {p.src = e.target.result;})
      };
      reader.readAsDataURL(file);
    }
  });

  //afficher et masquer la preview photo de profil

function afficherPhotoProfil(){
  const container = document.querySelector(".container-preview-photo-profil")
  container.classList.add("previewActive")
}

function masquerPhotoProfil(){

  const container = document.querySelector(".container-preview-photo-profil")
  container.classList.remove("previewActive")
}

//afficher modal suppresion compte

function afficherModalSuppresionCompte(){
  const container = document.querySelector(".container-modal-suppresion-compte");
  container.classList.add("modalActive");
}

function masquerModalSuppresionCompte(){
  const container = document.querySelector(".container-modal-suppresion-compte");
  container.classList.remove("modalActive");
}

//afficher et masquer modal informations teacher

function afficherModalAffichageInformationsTeacher(){
  const container = document.querySelector(".container-modal-voir-informations-teacher");
  container.classList.add("modalActive");
}

function masquerModalAffichageInformationsTeacher(){
  const container = document.querySelector(".container-modal-voir-informations-teacher");
  container.classList.remove("modalActive");
}

//afficher et masquer le modal pour la modification des infos teacher

function afficherModalModificationInformationsTeacher(){
  const container = document.querySelector(".container-modal-modifier-informations-teacher");
  container.classList.add("modalActive");
}

function masquerModalModificationInformationsTeacher(){
  const container = document.querySelector(".container-modal-modifier-informations-teacher");
  container.classList.remove("modalActive");
}