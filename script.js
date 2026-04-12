let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-xmark');
    menu.classList.toggle('fa-bars');
    navbar.classList.toggle('active');
}

menu.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        menu.click();
    }
});

window.onscroll = () => {
    menu.classList.add('fa-bars');
    menu.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text', {
    strings: ['Software Engineer', 'Frontend Developer(Next Js)'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
});

const projectImageSliders = document.querySelectorAll('.project-image');

projectImageSliders.forEach((slider, sliderIndex) => {
    const slides = slider.querySelectorAll('.slide-image');

    if (slides.length <= 1) {
        return;
    }

    let currentSlideIndex = 0;

    setInterval(() => {
        slides[currentSlideIndex].classList.remove('active');
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        slides[currentSlideIndex].classList.add('active');
    }, 3000 + sliderIndex * 300);
});