const mobileNavbarBtn = document.querySelector('.mobile-navbar-btn');
const navbar = document.querySelector('.navbar');

mobileNavbarBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
});