// Pre-charge images

// functions for menu icon
const menuHamIcon = document.querySelector('.menuIcon');
const MobileMenu = document.querySelector('.navbar-right-mobile');

menuHamIcon.addEventListener('click',toggleMobileMenu);

function toggleMobileMenu(){
  MobileMenu.classList.toggle('inactive');
}


// FUNCTION FOR SERVICES

const cardServices = document.getElementsByClassName('card-service');
const apagado = document.getElementsByClassName('apagado')

for(var i=0; i<cardServices.length; i++){
  cardServices[i].addEventListener('click', myFunction)
}

function myFunction(e){
  console.log(e.target.children[2].classList.toggle('inactive'))
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
  containerConstruction.classList.add('inactive')
}
function ShowCivilEng(){
  console.log('click')
  ContainerAchitectureProy.classList.add('inactive');
  ContainerCivilEngProy.classList.toggle('inactive');
  containerConstruction.classList.add('inactive')
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
}

function NextImg(){
  pos=pos+1

  if (pos > NumbImages) {
    pos=1
  }
  fullImg.src = './project_images/'+classifcation+projectImage+'-'+pos+'.jpg'

    
}

function PreviousImg(){

  pos=pos-1
  if (pos<1){
    pos=NumbImages
  }
  fullImg.src = './project_images/'+classifcation+projectImage+'-'+pos+'.jpg'
}

// CREATING AND OPENING IMAGES FOR CONSTRUCTION

const Constructions = document.querySelector('.Container-Design-Construction');
Constructions.addEventListener('click',createConstruction);
const cardContainer = document.getElementById('ccp')
const containerConstruction = document.querySelector('.container-Construction')
 

// I'm creating 3 construction database 

  var createdConstruction = 0
  const arrayNames = ["Doña Vilma", "Blush Makeup", "Conjunto Cerrado Los Cedros", "Conjuto cerrado Torres de Almaguer"]
  const arrayDescription = ['Construccion de vivienda en la ciudad de Garzon - Huila','Construccion de local comercial en la ciudad de Pitalito - Huila','Construcción de shut de basuras en la ciudad de Pitalito-Huila','Construcción de portería, shut de basuras, construcción de zona e BBQ, pisos y cielo raso de zonas social en la ciudad de Pitalito-Huila']

  function createConstruction(){
    ContainerAchitectureProy.classList.add('inactive');
    ContainerCivilEngProy.classList.add('inactive')

    containerConstruction.classList.toggle('inactive')

    if (createdConstruction==0){

      for (i = 0; i<= arrayNames.length-1; i++){
        let cont = i+1
        let a ='onclick'
        let b = ','
        let c = 'openFullImg('
        let d = cont + ','
        let e = '14,'
        let f='"O")'
        let g = '"'
        
        console.log(b+c+d+e+f)
        
        // from here I need to create a for cicle 
        let newCardProject = document.createElement('div');
        newCardProject.classList.add('card-project');
        
        cardContainer.appendChild(newCardProject);

        let Newimage = document.createElement('img');
        Newimage.src = 'project_images/O'+cont+'-1G.jpg';
        Newimage.setAttribute('onmouseover','src="project_images/O'+cont+'-1.jpg"');
        Newimage.setAttribute('onmouseout','src="project_images/O'+cont+'-1G.jpg"');
        Newimage.setAttribute(a , c+d+e+f)
        
        // Newimage.onmouseover = 'this.src="./project_images/O1-1.jpg"';
        // Newimage.onmouseout = 'this.src="./project_images/O1-1G.jpg"';
        
        newCardProject.appendChild(Newimage);

    
        let newP2 = document.createElement('p')
        newP2.classList.add('bold');
        newP2.innerText = arrayNames[i];
        newCardProject.appendChild(newP2);

        let newP3 = document.createElement('p')
        newP3.classList.add('justified');
        newP3.innerText = arrayDescription[i];
        newCardProject.appendChild(newP3);

        createdConstruction=1
      
      }

    }
  }



