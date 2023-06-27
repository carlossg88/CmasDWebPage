// functions for menu icon
const menuHamIcon = document.querySelector('.menuIcon');
const MobileMenu = document.querySelector('.navbar-right-mobile');


menuHamIcon.addEventListener('click',toggleMobileMenu);

function toggleMobileMenu(){
  MobileMenu.classList.toggle('inactive');
}


// FUNCTIONS FOR ABOUT

const SeeMoreArchitect = document.querySelector('#See-More-Architect');
const ArchitectureParagraph = document.querySelector('#ArchitectureParagraph');
const paragraph1 = document.querySelector('#paragraph1Architecture');
const SeeLessArchitect =  document.querySelector('#See-Less-Architect')

SeeMoreArchitect.addEventListener('click',toggleMoreArchitect);
SeeLessArchitect.addEventListener('click',toggleMoreArchitect);

function toggleMoreArchitect(){
  ArchitectureParagraph.classList.toggle('inactive')
  paragraph1.classList.toggle('inactive')
}

const SeeMoreEngineer = document.querySelector('#See-More-Engineer');
const EngineerParagraph = document.querySelector('#EngineerParagraph');
const paragraph1E =  document.querySelector('#paragraph1Engineer')
const SeeLessEngineer = document.querySelector('#See-Less-Engineer')

SeeMoreEngineer.addEventListener('click',toggleMoreEngineer);
SeeLessEngineer.addEventListener('click',toggleMoreEngineer);

function toggleMoreEngineer(){
  EngineerParagraph.classList.toggle('inactive')
  paragraph1E.classList.toggle('inactive')
}