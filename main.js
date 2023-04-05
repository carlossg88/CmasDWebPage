// functions for menu icon
const menuHamIcon = document.querySelector('.menuIcon');
const MobileMenu = document.querySelector('.navbar-right-mobile');

menuHamIcon.addEventListener('click',toggleMobileMenu);

function toggleMobileMenu(){
  MobileMenu.classList.toggle('inactive');
}


// function for close floating image
const menuClose = document.querySelector('.close-Icon');
const imgRoll = document.querySelector('.ImgRoll');
menuClose.addEventListener('click',CloseImage);
function CloseImage(){
  imgRoll.classList.add('inactive')
}


