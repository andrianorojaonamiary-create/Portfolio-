const navLinks = document.querySelectorAll('header nav a');
const logoLinks = document.querySelector('.logo');
const sections = document.querySelectorAll('section');

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
    if (index < 4){
        index++;
        arrowLeft.classList.remove('disabled');
    }
    else{
        index = 5;
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