// functions for menu icon
const menuHamIcon = document.querySelector('.menuIcon');
const MobileMenu = document.querySelector('.navbar-right-mobile');


menuHamIcon.addEventListener('click',toggleMobileMenu);

function toggleMobileMenu(){
  MobileMenu.classList.toggle('inactive');
}



// function for open floating image 
// const menuOpen = document.querySelector('.card-project');
// const imgRoll = document.querySelector('.ImgRoll');

// menuOpen.addEventListener('click',OpenImage);
// function OpenImage(){
//   imgRoll.classlist.toggle('inactive')
// }



// function for close floating image
// const menuClose = document.querySelector('.close-Icon');
// const imgRoll = document.querySelector('.ImgRoll');
// menuClose.addEventListener('click',CloseImage);
// function CloseImage(){
//   imgRoll.classList.add('inactive')
// }

const FullImgBox = document.getElementById("fullImgBox")
fullImg = document.getElementById("fullImg")

function closeImg(){
  FullImgBox.style.display = "none"
}
function openFullImg(reference){
  FullImgBox.style.display = "flex"
  
  fullImg.src = reference
  console.log(reference)
  if (reference == "./project_images/A1-32.jpg"){
    console.log("click")
  }


  
}

