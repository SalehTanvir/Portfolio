let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
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