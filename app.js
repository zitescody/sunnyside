//toggle navbar on a mobile orientation
const navToggle = document.querySelector(".hamburger-container");
const links = document.querySelector(".main-nav");

navToggle.addEventListener('click', function(){
    links.classList.toggle("show-nav");
})