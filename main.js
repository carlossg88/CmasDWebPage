// functions for menu icon
const menuHamIcon = document.querySelector('.menuIcon');
const MobileMenu = document.querySelector('.navbar-right-mobile');


menuHamIcon.addEventListener('click',toggleMobileMenu);

function toggleMobileMenu(){
  MobileMenu.classList.toggle('inactive');
}




// FUNCTIONS FOR PROJECTS

// SELECTING ARCHITECTURE OR CIVIL ENGINEERING PROJECTS

const Architecture = document.querySelector('.Container-Design-Architecture');
const CivilEng = document.querySelector('.Container-Design-CivilEng');

const ContainerAchitectureProy = document.querySelector('.container-Architecture');
const ContainerCivilEngProy = document.querySelector('.container-CivilEng');

Architecture.addEventListener('click', ShowArchiture);
CivilEng.addEventListener('click',ShowCivilEng);

function ShowArchiture(){
  console.log('click')
  ContainerAchitectureProy.classList.toggle('inactive');
  ContainerCivilEngProy.classList.add('inactive');
}
function ShowCivilEng(){
  console.log('click')
  ContainerAchitectureProy.classList.add('inactive');
  ContainerCivilEngProy.classList.toggle('inactive');
}


// OPENING OR CLOSING IMAGES ON PROJECTS

var projectImage =0
var pos=1

const FullImgBox = document.getElementById("fullImgBox")
fullImg = document.getElementById("fullImg")

function closeImg(){
  FullImgBox.style.display = "none"
}
function openFullImg(reference,reference2,reference3){
  FullImgBox.style.display = "flex"
  
  console.log(reference)
  console.log(reference2)
  console.log(reference3)
  
  fullImg.src='./project_images/'+reference3+reference+'-1.jpg'
  projectImage = reference
  classifcation = reference3
  pos = 1
  NumbImages = reference2

  
  // if (reference == 1){
  //   projectImage=1
  //   fullImg.src = './project_images/A1-1.jpg'
  //   pos=1
  // }
  // if (reference==2){
  //   projectImage=2
  //   fullImg.src = './project_images/A2-1.jpg'
  //   pos=1
  // }
  // if (reference==3){
  //   projectImage=3
  //   fullImg.src = './project_images/A3-1.jpg'
  //   pos=1
  // }
  // if (reference==4){
  //   projectImage=4
  //   fullImg.src = './project_images/A4-1.jpg'
  //   pos=1
  // }
  // if (reference==5){
  //   projectImage=5
  //   fullImg.src = './project_images/A5-1.jpg'
  //   pos=1
  // }
  // if (reference==6){
  //   projectImage=6
  //   fullImg.src = './project_images/A6-1.jpg'
  //   pos=1
  // }
  // if (reference==7){
  //   projectImage=7
  //   fullImg.src = './project_images/A7-1.jpg'
  //   pos=1
  // }
  // if (reference==8){
  //   projectImage=8
  //   fullImg.src = './project_images/A8-1.jpg'
  //   pos=1
  // }
  // if (reference==9){
  //   projectImage=9
  //   fullImg.src = './project_images/A9-1.jpg'
  //   pos=1
  // }
  // if (reference==10){
  //   projectImage=10
  //   fullImg.src = './project_images/A10-1.jpg'
  //   pos=1
  // }
  // if (reference==11){
  //   projectImage=11
  //   fullImg.src = './project_images/A11-1.jpeg'
  //   pos=1
  // }
  // if (reference==12){
  //   projectImage=12
  //   fullImg.src = './project_images/A12-1.jpg'
  //   pos=1
  // }
  // if (reference==13){
  //   projectImage=13
  //   fullImg.src = './project_images/A13-1.jpg'
  //   pos=1
  // }
  // if (reference==14){
  //   projectImage=14
  //   fullImg.src = './project_images/A14-1.jpg'
  //   pos=1
  // }
}

function NextImg(){
  pos=pos+1

  if (pos > NumbImages) {
    pos=1
  }
  fullImg.src = './project_images/'+classifcation+projectImage+'-'+pos+'.jpg'

  // if (projectImage==1){
    
  //   if (pos>36){
  //     pos=1
  //   }
  //   console.log(fullImg.src)
  //   fullImg.src = './project_images/A1-'+pos+'.jpg'
  //   console.log(pos)
  // }

  // if (projectImage==2){
  //   if (pos>44){
  //     pos=1
  //   }
  //   fullImg.src = './project_images/A2-'+pos+'.jpg'
  // }

  // if (projectImage==3){
  //   if (pos>9){
  //     pos=1
  //   }
  //   fullImg.src = './project_images/A3-'+pos+'.jpg'
  // }

  // if (projectImage==4){
  //   if (pos>16){
  //     pos=1
  //   }
  //   fullImg.src = './project_images/A4-'+pos+'.jpg'
  //   console.log(fullImg.src)
  // }

  // if (projectImage==5){
  //   if (pos>15){
  //     pos=1
  //   }
  //   fullImg.src = './project_images/A5-'+pos+'.jpg'
  //   console.log(fullImg.src)
  // }

  // if (projectImage==6){
  //   if (pos>28){
  //     pos=1
  //   }
  //   fullImg.src = './project_images/A6-'+pos+'.jpg'
  //   console.log(fullImg.src)
  // }

  // if (projectImage==7){
  //   if (pos>16){
  //     pos=1
  //   }
  //   fullImg.src = './project_images/A7-'+pos+'.jpg'
  //   console.log(fullImg.src)
  // }

  // if (projectImage==8){
  //   if (pos>11){
  //     pos=1
  //   }
  //   fullImg.src = './project_images/A8-'+pos+'.jpg'
  //   console.log(fullImg.src)
  // }

  // if (projectImage==9){
  //   if (pos>15){
  //     pos=1
  //   }
  //   fullImg.src = './project_images/A9-'+pos+'.jpg'
  //   console.log(fullImg.src)
  // }

  // if (projectImage==10){
  //   if (pos>7){
  //     pos=1
  //   }
  //   fullImg.src = './project_images/A10-'+pos+'.jpg'
  //   console.log(fullImg.src)
  // }

  // if (projectImage==11){
  //   if (pos>5){
  //     pos=1
  //   }
  //   fullImg.src = './project_images/A11-'+pos+'.jpg'
  //   console.log(fullImg.src)
  // }

  // if (projectImage==12){
  //   if (pos>12){
  //     pos=1
  //   }
  //   fullImg.src = './project_images/A12-'+pos+'.jpg'
  //   console.log(fullImg.src)
  // }

  // if (projectImage==13){
  //   if (pos>28){
  //     pos=1
  //   }
  //   fullImg.src = './project_images/A13-'+pos+'.jpg'
  //   console.log(fullImg.src)
  // }

  // if (projectImage==14){
  //   if (pos>25){
  //     pos=1
  //   }
  //   fullImg.src = './project_images/A14-'+pos+'.jpg'
  //   console.log(fullImg.src)
  // }
    
}

function PreviousImg(){

  pos=pos-1
  if (pos<1){
    pos=NumbImages
  }
  fullImg.src = './project_images/'+classifcation+projectImage+'-'+pos+'.jpg'

  // if (projectImage==1){
    
  //   if (pos<1){
  //     pos=36
  //   }
  //   console.log('posicion '+pos)
  //   fullImg.src = './project_images/A1-'+pos+'.jpg'
  //   console.log('imagen de proyecto'+projectImage)
  //   console.log('Source'+ fullImg.src)
  // }
  // if (projectImage==2){
    
  //   if (pos<1){
  //     pos=44
  //   }
  //   fullImg.src = './project_images/A2-'+pos+'.jpg'
  // }
  // if (projectImage==3){
  //   if (pos<1){
  //     pos=9
  //   }
  //   fullImg.src = './project_images/A3-'+pos+'.jpg'
  // }
  // if (projectImage==4){
  //   console.log(fullImg.src)
    
  //   if (pos<1){
  //     pos=16
  //   }
  //   fullImg.src = './project_images/A4-'+pos+'.jpg'
  // }

  // if (projectImage==5){
  //   console.log(fullImg.src)
    
  //   if (pos<1){
  //     pos=15
  //   }
  //   fullImg.src = './project_images/A5-'+pos+'.jpg'
  // }
  // if (projectImage==6){
  //   console.log(fullImg.src)
  //   if (pos<1){
  //     pos=28
  //   }
  //   fullImg.src = './project_images/A6-'+pos+'.jpg'
  // }
  // if (projectImage==7){
  //   console.log(fullImg.src)
  //   if (pos<1){
  //     pos=16
  //   }
  //   fullImg.src = './project_images/A7-'+pos+'.jpg'
  // }
  // if (projectImage==8){
    
  //   console.log(fullImg.src)
  //   if (pos<1){
  //     pos=11
  //   }
  //   fullImg.src = './project_images/A8-'+pos+'.jpg'
  // }
  // if (projectImage==9){
    
  //   console.log(fullImg.src)
  //   if (pos<1){
  //     pos=15
  //   }
  //   fullImg.src = './project_images/A9-'+pos+'.jpg'
  // }
  // if (projectImage==10){
    
  //   console.log(fullImg.src)
  //   if (pos<1){
  //     pos=7
  //   }
  //   fullImg.src = './project_images/A10-'+pos+'.jpg'
  // }
  // if (projectImage==11){
    
  //   console.log(fullImg.src)
  //   if (pos<1){
  //     pos=5
  //   }
  //   fullImg.src = './project_images/A11-'+pos+'.jpg'
  // }

  // if (projectImage==12){
    
  //   console.log(fullImg.src)
  //   if (pos<1){
  //     pos=12
  //   }
  //   fullImg.src = './project_images/A12-'+pos+'.jpg'
  // }
  // if (projectImage==13){
    
  //   console.log(fullImg.src)
  //   if (pos<1){
  //     pos=28
  //   }
  //   fullImg.src = './project_images/A13-'+pos+'.jpg'
  // }
  // if (projectImage==14){
  //   console.log(fullImg.src)
  //   if (pos<1){
  //     pos=25
  //   }
  //   fullImg.src = './project_images/A14-'+pos+'.jpg'
  // }
  
    
}


// FUNCTIONS FOR ABOUT

const SeeMoreArchitect = document.querySelector('#See-More-Architect');
const ArchitectureParagraph = document.querySelector('#ArchitectureParagraph');
const paragraph1 = document.querySelector('#paragraph1Architecture')

SeeMoreArchitect.addEventListener('click',toggleMoreArchitect)

function toggleMoreArchitect(){
  ArchitectureParagraph.classList.remove('inactive')
  paragraph1.classList.add('inactive')
}




