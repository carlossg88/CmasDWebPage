const menuHamIcon = document.querySelector('.menuIcon');
const MobileMenu = document.querySelector('.navbar-right-mobile');
const BackgroundImage = document.querySelector('.BackgroundImage');


menuHamIcon.addEventListener('click',toggleMobileMenu);



function toggleMobileMenu(){
  MobileMenu.classList.toggle('inactive');
}


