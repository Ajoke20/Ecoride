document.addEventListener('DOMContentLoaded', function () {

    const accueilLink = document.querySelector('.nav-link[href="/"]');

    if (accueilLink) {
        accueilLink.addEventListener('click', function (event) {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    const commandesLink = document.querySelector('.nav-link[href="/covoiturages"]');
    if (commandesLink) {
        commandesLink.addEventListener('click', function (event) {
            event.preventDefault();

            const rechercheTrajetSection = document.querySelector('.recherche-trajet');
            if (rechercheTrajetSection) {
                rechercheTrajetSection.style.display = 'block';
                rechercheTrajetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    const searchForm = document.querySelector('.recherche-trajet form');
    if (searchForm) {
        searchForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const rechercheSection = document.querySelector('.recherche');
            if (rechercheSection) {

                rechercheSection.style.display = 'block';
                rechercheSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    const inscrireLink = Array.from(document.querySelectorAll('.nav-link'))
        .find(link => link.textContent.trim() === "S'inscrire");

    if (inscrireLink) {
        inscrireLink.addEventListener('click', function (event) {
            event.preventDefault();
            const formContainer = document.querySelector('.form-container');
            if (formContainer) {

                formContainer.style.display = 'block';

                formContainer.scrollIntoView({ behavior: 'smooth' });
                setTimeout(autoFillForm, 500)
            }
        });
    }
});

function autoFillForm() {
    document.getElementById('name').value = "Jean Dupont";
    document.getElementById('email').value = "jean.dupont@example.com";
    document.getElementById('motdepasse').value = "123456";
    document.getElementById('rue').value = "20 rue champs elysée";
    document.getElementById('paris').value = "Paris";
    document.getElementById('phone').value = "0612345678";
}

const formInscription = document.getElementById('form-inscription')

formInscription.addEventListener('submit', function (event) {
    event.preventDefault()
    alert('Envoi du formulaire')
    setTimeout(() => {
        alert('Formulaire envoyé avec succcess !')
        formInscription.request()
    }, 4000)
})

document.addEventListener('DOMContentLoaded', function () {
    const testimonialCards = document.querySelectorAll('.temoignage-card');


    if (testimonialCards.length === 0) return;

    let currentIndex = 0;
    testimonialCards.forEach((card, index) => {
        if (index === 0) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });

    function showNextTestimonial() {

        testimonialCards[currentIndex].classList.remove('active');

        currentIndex = (currentIndex + 1) % testimonialCards.length;

        testimonialCards[currentIndex].classList.add('active');
    }

    setInterval(showNextTestimonial, 1000);
});



