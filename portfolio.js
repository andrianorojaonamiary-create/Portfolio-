const navLinks = document.querySelectorAll('header nav a');
const logoLinks = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.getElementById('menu-icon');
const nav = document.querySelector('header nav');

// Menu mobile
menuIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Fermer le menu au clic sur un lien
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

const activePage = () => {
    const header = document.querySelector('header');
    const barBox = document.querySelector('.bar-box');

    header.classList.remove('active');
    setTimeout(() =>{
        header.classList.add('active');
    }, 1100);

    navLinks.forEach(link =>{
        link.classList.remove('active');
    });

    barBox.classList.remove('active');
    setTimeout(() =>{
        barBox.classList.add('active');
    }, 1100);

    sections.forEach(section =>{
        section.classList.remove('active');
    });
}

navLinks.forEach((link, idx) => {
    link.addEventListener('click' , () => {
        if (!link.classList.contains('active')) {
            activePage();
            link.classList.add('active');

            setTimeout(() =>{
                sections[idx].classList.add('active');
            }, 1100);
        }
    });
});

logoLinks.addEventListener('click' , () => {
    if (!navLinks[0].classList.contains('active')) {
        activePage();
        navLinks[0].classList.add('active');

        setTimeout(() =>{
            sections[0].classList.add('active');
        }, 1100);
    }
});

const resumeBtn = document.querySelectorAll('.resume-btn');

resumeBtn.forEach((btn , idx) =>{
    btn.addEventListener('click', () => {
        const resumeDetail = document.querySelectorAll('.resume-detail');
        resumeBtn.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetail.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetail[idx].classList.add('active');
    });
});

const arrowRight =  document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft =  document.querySelector('.portfolio-box .navigation .arrow-left');
let index = 0;

const activePortfolio = () =>{
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetail = document.querySelectorAll('.portfolio-detail');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portfolioDetail.forEach(detail  => {
        detail.classList.remove('active');
    });
    portfolioDetail[index].classList.add('active');
}

arrowRight.addEventListener('click' , () => {
    if (index < 3){
        index++;
        arrowLeft.classList.remove('disabled');
    }
    else{
        index = 4;
        arrowRight.classList.add('disabled');
    }
    activePortfolio();
});

arrowLeft.addEventListener('click' , () => {
    if (index > 1){
        index--;
        arrowRight.classList.remove('disabled');
    }
    else{  
        index = 0;
        arrowLeft.classList.add('disabled');
    }
    activePortfolio();
});

// === TOGGLE SWITCH MODE JOUR/NUIT ===
const themeToggle = document.getElementById('themeToggle');

// Vérifier le thème sauvegardé
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
} else {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
});

// Animation des titres alternatifs
const titleElement = document.querySelector('.home-detail h2 span');
const titles = [
    'Développeur Web',
    'Développeur Frontend',
    'Développeur Fullstack',
];
let titleIndex = 0;

setInterval(() => {
    titleIndex = (titleIndex + 1) % titles.length;
    titleElement.textContent = titles[titleIndex];
    titleElement.setAttribute('data-text', titles[titleIndex]);
}, 5000); // Change toutes les 5 secondes



// Envoi du formulaire avec EmailJS
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const templateParams = {
            nom: document.getElementById('nom').value,
            email: document.getElementById('email').value,
            telephone: document.getElementById('telephone').value,
            message: document.getElementById('message').value
        };
        
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
            .then(function(response) {
                alert('Message envoyé avec succès ! Je vous répondrai rapidement.');
                contactForm.reset();
            }, function(error) {
                alert('Erreur lors de l\'envoi. Veuillez réessayer.');
            });
    });
}
