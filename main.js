const menuHamIcon = document.querySelector('.menuIcon')
const MobileMenu = document.querySelector('.navbar-right-mobile')

menuHamIcon.addEventListener('click',toggleMobileMenu)

function toggleMobileMenu(){
  MobileMenu.classList.toggle('inactive')
  console.log('click aqui')
}