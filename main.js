const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu .nav-link');

    burger.addEventListener('click', () => {

        //toggle Nave
        nav.classList.toggle('nav-menu-active');


        //animate inks
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ``
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .5}s`;

            }
        });
        //burger animation

        burger.classList.toggle('toggle');

    });
}

navSlide();