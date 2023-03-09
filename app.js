const navLinks = document.getElementById('menu-links');
const hamburger = document.getElementById('hamburger');
const maincontent = document.getElementById('maincontent');
const iconCancel = document.querySelector('#iconCancel');
const menuLinks = document.querySelectorAll('.menu-anchor');
const header = document.getElementsByClassName('header');

const projects = [
  {
    name: 'Tonic',
    experience: {
      company: 'canopy',
      role: 'Back End Dev',
      year: 2015,
    },
    description: 'A daily selection of privately personalized reads no accounts or sign-ups required.',
    featuredImage: './images/SnapshootPortfolio.svg',
    technologies: [
      'html', 'css', 'javascript',
    ],
  },

  {
    name: 'Multi-Post Stories',
    experience: {
      company: 'canopy',
      role: 'Back End Dev',
      year: 2015,
    },
    description: 'A daily selection of privately personalized reads no accounts or sign-ups required.',
    featuredImage: './images/SnapshootPortfolio1.svg',
    technologies: [
      'html', 'css', 'javascript',
    ],
  },

  {
    name: 'Facebook 360',
    experience: {
      company: 'canopy',
      role: 'Back End Dev',
      year: 2015,
    },
    description: 'A daily selection of privately personalized reads no accounts or sign-ups required.',
    featuredImage: './images/SnapshootPortfolio2.svg',
    technologies: [
      'html', 'css', 'javascript',
    ],
  },

  {
    name: 'Uber Navigation',
    experience: {
      company: 'canopy',
      role: 'Back End Dev',
      year: 2015,
    },
    description: 'A daily selection of privately personalized reads no accounts or sign-ups required.',
    featuredImage: './images/SnapshootPortfolio3.svg',
    technologies: [
      'html', 'css', 'javascript',
    ],
  },
];

// open mobile menu
hamburger.addEventListener('click', (() => {
  navLinks.style.visibility = 'visible';
  hamburger.style.display = 'none';
  maincontent.classList.add('blur');
}));

// close mobile menu
iconCancel.addEventListener('click', (() => {
  navLinks.style.visibility = 'hidden';
  hamburger.style.display = 'block';
  hamburger.style.position = 'absolute';
  maincontent.classList.remove('blur');
}));

// mobile menu links on click
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

// add blur effect when modal is open
const addBlurEffect = () => {
  maincontent.classList.toggle('modal-blur');
  header[0].classList.toggle('modal-blur');
};

// create project cards
const projectsSection = document.getElementById('portfolio');

// loop through the projects
for (let i = 0; i < projects.length; i += 1) {
  console.log(i)
  
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
    console.log(job)
    jobCompany.innerHTML = projects[i].experience.company
    jobRole.innerHTML = projects[i].experience.role
    jobYear.innerHTML = projects[i].experience.year
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

  seeProjectBtn.addEventListener('click', toggleDetailsModal)

  cardDiv.appendChild(imageDiv);
  cardDiv.appendChild(div);
  projectsSection.append(cardDiv);
  // }

};

// create Modal
const modal = document.getElementById('details-modal');

function displayModal (id) {

  const project = projects[id]

  const modalTitle = document.createElement('h3')
  modalTitle.classList.add('project-title');
  modalTitle.innerHTML = project.name

   // project ul job experience
  let modaljobHistoryList = document.createElement('ul');
  let modaljobCompany = document.createElement('li');
  let modaljobRole = document.createElement('li');
  let modaljobYear = document.createElement('li');
  modaljobHistoryList.classList.add('project-links');
  modaljobCompany.classList.add('canopy');
  modaljobRole.classList.add('canopy');
  modaljobYear.classList.add('year');

  modaljobCompany.innerHTML = project.experience.company;
  modaljobRole.innerHTML = project.experience.role;
  modaljobYear.innerHTML = project.experience.year;

  modaljobHistoryList.appendChild(modaljobCompany);
  modaljobHistoryList.appendChild(modaljobRole);
  modaljobHistoryList.appendChild(modaljobYear);
  
  modal.appendChild(modalTitle);
  modal.appendChild(modaljobHistoryList);

  let modalCloseIcon = document.createElement('img');
  modalCloseIcon.classList.add('cancel-modal');
  modalCloseIcon.src = './images/IconTimes.svg';
  modalCloseIcon.addEventListener('click', toggleDetailsModal)
  let modalProjectImage = document.createElement('img');
  modalProjectImage.classList.add('modalImage');
  modalProjectImage.src = project.featuredImage;

  modal.appendChild(modalCloseIcon);
  modal.appendChild(modalProjectImage);

  // modal project description
  let modalDiv = document.createElement('div');
  modalDiv.classList.add('description-and-links');
  let modalPTag = document.createElement('p');
  modalPTag.classList.add('modal-description')
  let modalRightDiv = document.createElement('div');
  modalRightDiv.classList.add('modal-right');

  // modal skills
  let modalSkillsList = document.createElement('ul');
  let modalhtmlSkill = document.createElement('li');
  let modalcsssSkill = document.createElement('li');
  let modaljsSkill = document.createElement('li');
  modalSkillsList.classList.add('my-skills');
  modalhtmlSkill.classList.add('skill-link');
  modalhtmlSkill.classList.add('html-btn');
  modalcsssSkill.classList.add('skill-link');
  modalcsssSkill.classList.add('css-btn');
  modaljsSkill.classList.add('skill-link');
  modaljsSkill.classList.add('js-btn');

  modalhtmlSkill.innerHTML = project.technologies[0]
  modalcsssSkill.innerHTML = project.technologies[1]
  modaljsSkill.innerHTML = project.technologies[2]

  modalSkillsList.appendChild(modalhtmlSkill);
  modalSkillsList.appendChild(modalcsssSkill);
  modalSkillsList.appendChild(modaljsSkill);

  modal.appendChild(modalSkillsList);

  let hrDiv = document.createElement('div');
  hrDiv.classList.add('hr');
  let hr = document.createElement('hr');
  hrDiv.appendChild(hr)
  modal.appendChild(hrDiv);

  // buttons
  let buttonsDiv = document.createElement('div');
  buttonsDiv.classList.add('btns');
  let projectLiveLink = document.createElement('a');
  let sourceCodeLink = document.createElement('a');
  projectLiveLink.href = '';
  sourceCodeLink.href = '';
  projectLiveLink.classList.add('see-project-btn');
  sourceCodeLink.classList.add('see-project-btn');
  projectLiveLink.innerHTML = 'See Live';
  sourceCodeLink.innerHTML = 'See Source';
  buttonsDiv.appendChild(projectLiveLink);
  buttonsDiv.appendChild(sourceCodeLink);
  modal.append(buttonsDiv);

}

// open and close modal
const toggleDetailsModal = () => {
  modal.classList.toggle('visible');
  addBlurEffect();
  displayModal(2); 
};