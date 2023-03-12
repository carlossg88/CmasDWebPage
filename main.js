const menuHamIcon = document.querySelector('.menuIcon');
const MobileMenu = document.querySelector('.navbar-right-mobile');
const BackgroundImage = document.querySelector('.BackgroundImage');

menuHamIcon.addEventListener('click',toggleMobileMenu);

contador = 0;
function toggleMobileMenu(){
  
  MobileMenu.classList.toggle('inactive');

  // BackgroundImage.setAttribute('src', './img'+contador+'.jpg');
  // contador = contador +1;
  // console.log(contador);
  // if (contador == 5){
  //   contador=0
  // }
}