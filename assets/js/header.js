let burgerIcon = document.querySelector('.burger-icon');
let headerNavbar = document.querySelector('.header-navbar');
burgerIcon.addEventListener('click', () => {
    burgerIcon.classList.toggle('active-burger');
    burgerIcon.classList.toggle('active');
    headerNavbar.classList.toggle('active-navbar');
})