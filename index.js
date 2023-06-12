const mobileMenu = document.querySelector('.mobile-menu');
const mobileNav = document.querySelector('.mobile-nav');

mobileMenu.addEventListener('click', () => {
    if(mobileNav.style.display === "none") {
        mobileNav.style.display = "flex";
    }
    else {
        mobileNav.style.display = "none";
    }
});

window.addEventListener('resize', () => {
    if(window.innerWidth > 1024) {
        mobileNav.style.display = "none";
    }
});

const fstButton = document.getElementById('fstButton');
const fstHighlight = document.getElementById('fstHighlight');

fstButton.addEventListener('click', () => {
    fstHighlight.classList.add('highlighted');
    fstHighlight.classList.add('yellow');
});

const sndButton = document.getElementById('sndButton');
const sndHighlight = document.getElementById('sndHighlight');

sndButton.addEventListener('click', () => {
    sndHighlight.classList.add('highlighted');
    sndHighlight.classList.add('pink');
});