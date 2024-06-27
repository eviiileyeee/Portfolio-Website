const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".navbar");
const close_btn = document.getElementById("mobile-nav-icon");


const toggleNavbar = () =>{
    nav_header.classList.toggle("active")
    close_btn.style.color= "black";
}

const errInfo = () => {
    alert("not available");
}
mobile_nav = addEventListener('click', () => toggleNavbar());

err_about = addEventListener('click',() => errInfo());