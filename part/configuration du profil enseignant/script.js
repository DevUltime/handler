const selectedClasses = new Set()//garde la liste des classes cochées

const classCards = document.querySelectorAll('.class-card')
const subjectInput = document.getElementById('subject')
const errorMessage = document.getElementById('errorMessage')
const submitBtn = document.getElementById('submitBtn')

//selection du bouton
classCards.forEach(card => {

    card.addEventListener('click', () => {

        const className = card.dataset.class;

        if (selectedClasses.has(className)) {
            selectedClasses.delete(className)
            card.classList.remove('selected')
        }else{
            selectedClasses.add(className)
            card.classList.add('selected')
        }
    })
})

//validation et soumission du formulaire
submitBtn.addEventListener('click', () => {

    const subject = subjectInput.value.trim()

    if (subject === ''){
        showError('Veuillez indiquer la matière enseignée.')
        return;
    }

    if (selectedClasses.size === 0){
        showError('Veillez sélectionner aumoins une classe.')
        return
    }

    hideError();

    //enregistrement des données collectées
    const teacherProfile = {
        subject: subject,
        classes: Array.from(selectedClasses)
    }
    console.log('Profil enseignant :', teacherProfile)

    alert('Profil enregistré ! Matière: ' + subject + '- classes: ' + teacherProfile.classes.join(', '))//juste pour le test en local sur pc, mais a supprimé plus tard.
})

function showError(text) {
    errorMessage.textContent = text
    errorMessage.classList.add('show')
}

function hideError() {
    errorMessage.classList.remove('show')
}