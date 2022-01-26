const hamburgerButton = document.querySelector('.btn--menu');
const navBar = document.querySelector('.nav');

hamburgerButton.addEventListener('click', changeNav)

function changeNav() {
    navBar.classList.toggle('active');
}