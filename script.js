const mobileNavbarBtn = document.querySelector('.mobile-navbar-btn');
const navbar = document.querySelector('.navbar');

mobileNavbarBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
});


function message_guard(){
  window.location.href="https://message-guard.netlify.app"
}