// functions for menu icon
const menuHamIcon = document.querySelector('.menuIcon');
const MobileMenu = document.querySelector('.navbar-right-mobile');


menuHamIcon.addEventListener('click',toggleMobileMenu);

function toggleMobileMenu(){
  MobileMenu.classList.toggle('inactive');
}



var projectImage =0
var pos=1


const FullImgBox = document.getElementById("fullImgBox")
fullImg = document.getElementById("fullImg")

function closeImg(){
  FullImgBox.style.display = "none"
}
function openFullImg(reference){
  FullImgBox.style.display = "flex"
  fullImg.src = reference
  // console.log(reference)
  if (reference == 1){
    projectImage=1
    fullImg.src = './project_images/A1-32.jpg'
    pos=1
  }
  if (reference==2){
    projectImage=2
    fullImg.src = './project_images/A2-4.jpg'
    pos=1
  }
  if (reference==3){
    projectImage=3
    fullImg.src = './project_images/A3-4.jpg'
    pos=1
  }
  if (reference==4){
    projectImage=4
    fullImg.src = './project_images/A4-4.jpg'
    pos=1
  }
  if (reference==5){
    projectImage=5
    fullImg.src = './project_images/A5-2.jpg'
    pos=1
  }
  if (reference==6){
    projectImage=6
    fullImg.src = './project_images/A6-3.jpg'
    pos=1
  }
  if (reference==7){
    projectImage=7
    fullImg.src = './project_images/A7-10.jpg'
    pos=1
  }
  if (reference==8){
    projectImage=8
    fullImg.src = './project_images/A8-2.jpg'
    pos=1
  }
  if (reference==9){
    projectImage=9
    fullImg.src = './project_images/A9-4.jpg'
    pos=1
  }
  if (reference==10){
    projectImage=10
    fullImg.src = './project_images/A10-4.jpg'
    pos=1
  }
  if (reference==11){
    projectImage=11
    fullImg.src = './project_images/A11-2.jpeg'
    pos=1
  }
  if (reference==12){
    projectImage=12
    fullImg.src = './project_images/A12-4.jpg'
    pos=1
  }
  if (reference==13){
    projectImage=13
    fullImg.src = './project_images/A13-4.jpg'
    pos=1
  }
  if (reference==14){
    projectImage=14
    fullImg.src = './project_images/A14-4.jpg'
    pos=1
  }
}

function NextImg(){

  if (projectImage==1){
    fullImg.src = './project_images/A1-'+pos+'.jpg'
    console.log(fullImg.src)
    pos=pos+1
    if (pos==37){
      pos=1
    }
  }
  if (projectImage==2){
    fullImg.src = './project_images/A2-'+pos+'.jpg'
    pos=pos+1
    if (pos==44){
      pos=1
    }
  }
  if (projectImage==3){
    fullImg.src = './project_images/A3-'+pos+'.jpg'
    pos=pos+1
    if (pos==9){
      pos=1
    }
  }
  if (projectImage==4){
    fullImg.src = './project_images/A4-'+pos+'.jpg'
    console.log(fullImg.src)
    pos=pos+1
    if (pos==16){
      pos=1
    }
  }
  if (projectImage==5){
    fullImg.src = './project_images/A5-'+pos+'.jpg'
    console.log(fullImg.src)
    pos=pos+1
    if (pos==16){
      pos=1
    }
  }
  if (projectImage==6){
    fullImg.src = './project_images/A6-'+pos+'.jpg'
    console.log(fullImg.src)
    pos=pos+1
    if (pos==28){
      pos=1
    }
  }
  if (projectImage==7){
    fullImg.src = './project_images/A7-'+pos+'.jpg'
    console.log(fullImg.src)
    pos=pos+1
    if (pos==16){
      pos=1
    }
  }
  if (projectImage==8){
    fullImg.src = './project_images/A8-'+pos+'.jpg'
    console.log(fullImg.src)
    pos=pos+1
    if (pos==11){
      pos=1
    }
  }
  if (projectImage==9){
    fullImg.src = './project_images/A9-'+pos+'.jpg'
    console.log(fullImg.src)
    pos=pos+1
    if (pos==15){
      pos=1
    }
  }
  if (projectImage==10){
    fullImg.src = './project_images/A10-'+pos+'.jpg'
    console.log(fullImg.src)
    pos=pos+1
    if (pos==7){
      pos=1
    }
  }
  if (projectImage==11){
    fullImg.src = './project_images/A11-'+pos+'.jpg'
    console.log(fullImg.src)
    pos=pos+1
    if (pos==5){
      pos=1
    }
  }

  if (projectImage==12){
    fullImg.src = './project_images/A12-'+pos+'.jpg'
    console.log(fullImg.src)
    pos=pos+1
    if (pos==12){
      pos=1
    }
  }
  if (projectImage==13){
    fullImg.src = './project_images/A13-'+pos+'.jpg'
    console.log(fullImg.src)
    pos=pos+1
    if (pos==28){
      pos=1
    }
  }
  if (projectImage==14){
    fullImg.src = './project_images/A14-'+pos+'.jpg'
    console.log(fullImg.src)
    pos=pos+1
    if (pos==25){
      pos=1
    }
  }
    
}

const Architecture = document.querySelector('.Container-Design-Architecture');
const ContainerAchitecture = document.querySelector('.container-Architecture');

Architecture.addEventListener('click', ShowArchiture);

function ShowArchiture(){
  console.log('click')
  ContainerAchitecture.classList.toggle('inactive');
}


