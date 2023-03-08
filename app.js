const navLinks = document.getElementById('menu-links');
const hamburger = document.getElementById('hamburger');
const maincontent = document.getElementById('maincontent');
const iconCancel = document.querySelector('#iconCancel');
const menuLinks = document.querySelectorAll('.menu-anchor');
const closeModalButton = document.getElementById('closeModal');
const modal = document.getElementById('details-modal');
const header = document.getElementsByClassName('header');
let cardProjectTitle = document.getElementsByClassName('project-title');
const project1Btn = document.getElementById('project1Btn')
const project2Btn = document.getElementById('project2Btn')
const project3Btn = document.getElementById('project3Btn')
const project4Btn = document.getElementById('project4Btn')
const htmlBtn = document.getElementsByClassName('html-btn')
const cssBtn = document.getElementsByClassName('css-btn')
const jsBtn = document.getElementsByClassName('js-btn')

const projects = [
  {
    name: 'Tonic',
    experience: {
      company: 'canopy',
      role: 'Back End Dev',
      year: 2015
    },
    description: 'A daily selection of privately personalized reads no accounts or sign-ups required.', 
    featuredImage: './images/SnapshootPortfolio.svg',
    technologies: [
      'html', 'css', 'javascript'
    ], 
  },

  {
    name: 'Multi-Post Stories',
    experience: {
      company: 'canopy',
      role: 'Back End Dev',
      year: 2015
    },
    description: 'A daily selection of privately personalized reads no accounts or sign-ups required.', 
    featuredImage: './images/SnapshootPortfolio1.svg',
    technologies: [
      'html', 'css', 'javascript'
    ], 
  },

  {
    name: 'Facebook 360',
    experience: {
      company: 'canopy',
      role: 'Back End Dev',
      year: 2015
    },
    description: 'A daily selection of privately personalized reads no accounts or sign-ups required.', 
    featuredImage: './images/SnapshootPortfolio2.svg',
    technologies: [
      'html', 'css', 'javascript'
    ], 
  },

  {
    name: 'Uber Navigation',
    experience: {
      company: 'canopy',
      role: 'Back End Dev',
      year: 2015
    },
    description: 'A daily selection of privately personalized reads no accounts or sign-ups required.', 
    featuredImage: './images/SnapshootPortfolio3.svg',
    technologies: [
      'html', 'css', 'javascript'
    ], 
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
  console.log("Hey")
  modal.classList.toggle('visible');
  addBlurEffect();
}

// closeModalButton.addEventListener('click', toggleDetailsModal)

// create project cards
const projectsSection = document.getElementById('portfolio');

// loop through the projects
for (let i = 0; i < projects.length; i += 1) {

  // card
  for(let cardIndex = 0; cardIndex < 4; cardIndex += 1) {

  // create card
  let cardDiv = document.createElement('div');
  cardDiv.classList.add('card')
  cardDiv.classList.add('first-column')

  // first column card image
  let imageDiv = document.createElement('div');
  imageDiv.classList.add('project-image')
  imageDiv.classList.add('first-column')
  let cardImage = document.createElement('img')
  cardImage.src = projects[i].featuredImage
  console.log(projects[i].featuredImage)
  imageDiv.appendChild(cardImage)

  // second column
  let div = document.createElement('div');
  div.classList.add('second-column')
    // card project title
  let projectTitle = document.createElement('h3');
  projectTitle.classList.add('project-title')
  projectTitle.innerText = projects[i].name
  div.appendChild(projectTitle)

    // project ul job experience
  let jobHistoryList = document.createElement('ul');
  let jobCompany = document.createElement('li');
  let jobRole = document.createElement('li');
  let jobYear = document.createElement('li');
  jobHistoryList.classList.add('project-links');
  jobCompany.classList.add('canopy');
  jobRole.classList.add('canopy');
  jobYear.classList.add('year');
  for (let job in projects[i].experience) {
    jobCompany.innerHTML = job.company
    jobRole.innerHTML = job.role
    jobYear.innerHTML = job.year
  }

  let cardProjectDescription = document.createElement('div');
  cardProjectDescription.classList.add('project-description');
  let pTag = document.createElement('p');
  cardProjectDescription.appendChild(pTag)
  pTag.innerHTML = projects[i].description
  div.appendChild(cardProjectDescription)

  jobHistoryList.appendChild(jobCompany)
  jobHistoryList.appendChild(jobRole)
  jobHistoryList.appendChild(jobYear)
  div.appendChild(jobHistoryList)

    // my skills
  let mySkillsList = document.createElement('ul');
  let htmlSkill = document.createElement('li');
  let csssSkill = document.createElement('li');
  let jsSkill = document.createElement('li');
  mySkillsList.classList.add('my-skills');
  htmlSkill.classList.add('skill-link');
  htmlSkill.classList.add('html-btn');
  csssSkill.classList.add('skill-link');
  csssSkill.classList.add('css-btn')
  jsSkill.classList.add('skill-link');
  jsSkill.classList.add('js-btn')
  
  htmlSkill.innerHTML = projects[i].technologies[0]
  csssSkill.innerHTML = projects[i].technologies[1]
  jsSkill.innerHTML = projects[i].technologies[2]

  mySkillsList.appendChild(htmlSkill)
  mySkillsList.appendChild(csssSkill)
  mySkillsList.appendChild(jsSkill)
  div.appendChild(mySkillsList)

  // see project button
  let seeProjectBtn = document.createElement('button');
  seeProjectBtn.classList.add('see-project-btn')
  seeProjectBtn.classList.add('open-modal-btn');
  seeProjectBtn.innerHTML = 'See Project'
  div.appendChild(seeProjectBtn)

  cardDiv.appendChild(imageDiv)
  cardDiv.appendChild(div)
  projectsSection.append(cardDiv)

  }

};


