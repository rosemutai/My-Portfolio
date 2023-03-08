const navLinks = document.getElementById('menu-links');
const hamburger = document.getElementById('hamburger');
const maincontent = document.getElementById('maincontent');
const iconCancel = document.querySelector('#iconCancel');
const menuLinks = document.querySelectorAll('.menu-anchor');
const closeModalButton = document.getElementById('closeModal')
const modal = document.getElementById('details-modal')
const seeModalButton = document.getElementsByClassName('open-modal-btn')
const header = document.getElementsByClassName('header');
const projectCards = document.getElementsByClassName('card');
const projectsSection = document.getElementById('portfolio')
const cardImageSection = document.getElementById('cardImg')
let cardImage = document.querySelector('.project-image img')
let cardProjectTitle = document.getElementsByClassName('project-title')
const jobCompany = document.getElementsByClassName('canopy')
const role = document.getElementsByClassName('career-role')
const year = document.getElementsByClassName('year')
const cardDescription = document.getElementsByClassName('modal-description')
const modalImage = document.getElementById('modalImage')

const projects = [
  {
    name: "Tonic",
    experience: {
      company: "canopy",
      role: "Back End Dev",
      year: 2015
    },
    description: "A daily selection of privately personalized reads no accounts or sign-ups required.", 
    featuredImage: "./images/SnapshootPortfolio.svg",
    technologies: [
      "html", "css", "javascript"
    ], 
    liveVersionLink: "https://github.com/rosemutai/My-Portfolio", 
    sourceCodeLink: "https://github.com/rosemutai/My-Portfolio/"
  },

  {
    name: "Tonic",
    experience: {
      company: "canopy",
      role: "Back End Dev",
      year: 2015
    },
    description: "A daily selection of privately personalized reads no accounts or sign-ups required.", 
    featuredImage: "./images/SnapshootPortfolio.svg",
    technologies: [
      "html", "css", "javascript"
    ], 
    liveVersionLink: "https://github.com/rosemutai/My-Portfolio", 
    sourceCodeLink: "https://github.com/rosemutai/My-Portfolio/"
  },

  {
    name: "Tonic",
    experience: {
      company: "canopy",
      role: "Back End Dev",
      year: 2015
    },
    description: "A daily selection of privately personalized reads no accounts or sign-ups required.", 
    featuredImage: "./images/SnapshootPortfolio.svg",
    technologies: [
      "html", "css", "javascript"
    ], 
    liveVersionLink: "https://github.com/rosemutai/My-Portfolio", 
    sourceCodeLink: "https://github.com/rosemutai/My-Portfolio/"
  },

  {
    name: "Tonic",
    experience: {
      company: "canopy",
      role: "Back End Dev",
      year: 2015
    },
    description: "A daily selection of privately personalized reads no accounts or sign-ups required.", 
    featuredImage: "./images/SnapshootPortfolio.svg",
    technologies: [
      "html", "css", "javascript"
    ], 
    liveVersionLink: "https://github.com/rosemutai/My-Portfolio", 
    sourceCodeLink: "https://github.com/rosemutai/My-Portfolio/"
  },
]


hamburger.addEventListener('click', (() => {
  navLinks.style.visibility = 'visible';
  hamburger.style.display = 'none';
  maincontent.classList.add('blur');
}));

iconCancel.addEventListener('click', (() => {
  navLinks.style.visibility = 'hidden';
  hamburger.style.display = 'block';
  hamburger.style.position = 'absolute';
  maincontent.classList.remove('blur');
}));

for (let i = 0; i < menuLinks.length; i += 1) {
  menuLinks[i].addEventListener('click', () => {
    maincontent.classList.remove('blur');
    navLinks.style.visibility = 'hidden';
    hamburger.classList.remove('blur');
    hamburger.style.display = 'block';
    hamburger.style.position = 'absolute';
    hamburger.style.display = 'flex';
  });
}

const addBlurEffect = () => {
  maincontent.classList.toggle('modal-blur');
  header[0].classList.toggle('modal-blur');
}

const toggleDetailsModal = () => {
  modal.classList.toggle('visible')
  addBlurEffect()
}

const modalTitle = document.getElementById('modal-title')

const htmlBtns = document.querySelectorAll('.html-btn')
for(let i = 0; i < htmlBtns.length; i += 1){
  for(let k = 0; k < projects[0].technologies.length; k += 1){
    htmlBtns.innerHTML[i] = projects[0].technologies[k]
  }
  
}

const cssBtns = document.querySelectorAll('.css-btn')
for(let i=0; i < cssBtns.length; i += 1) {
  for(let k = 0; k < projects[0].technologies.length; k += 1){
    cssBtns.innerHTML[i] = projects[1].technologies[k]
  }
}

const jsBtns = document.querySelectorAll('.js-btn')
for(let i=0; i < jsBtns.length;i+=1) {
  for(let k = 0; k < projects[0].technologies.length; k += 1){
    jsBtns.innerHTML[i] = projects[2].technologies[k]
  }
}

const htmlSkill = document.getElementById('htmlSkill')

function viewProject1 () {
    toggleDetailsModal()
    modalImage.src = projects[0].featuredImage
    modalTitle.innerText = projects[0].name
    cardDescription.innerText = projects[0].description  
}

function viewProject2 () {
    toggleDetailsModal()
    modalImage.src = projects[1].featuredImage
    modalTitle.innerText = projects[1].name
}

function viewProject3 () {
    toggleDetailsModal()
    modalImage.src = projects[2].featuredImage
    modalTitle.innerText = projects[2].name
}

function viewProject4 () {
    toggleDetailsModal()
    modalImage.src = projects[3].featuredImage
    modalTitle.innerText = projects[3].name
}



closeModalButton.addEventListener('click', toggleDetailsModal)
