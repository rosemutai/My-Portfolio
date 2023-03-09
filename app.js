const navLinks = document.getElementById('menu-links');
const hamburger = document.getElementById('hamburger');
const maincontent = document.getElementById('maincontent');
const iconCancel = document.querySelector('#iconCancel');
const menuLinks = document.querySelectorAll('.menu-anchor');
const header = document.getElementsByClassName('header');
const modal = document.getElementById('details-modal');
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

// create Modal
function displayModal(id) {
  const project = projects[id];
  const modalTitle = document.createElement('h3');
  modalTitle.classList.add('project-title');
  modalTitle.innerHTML = project.name;

  // project ul job experience
  const modaljobHistoryList = document.createElement('ul');
  const modaljobCompany = document.createElement('li');
  const modaljobRole = document.createElement('li');
  const modaljobYear = document.createElement('li');
  modaljobHistoryList.classList.add('project-links');
  modaljobCompany.classList.add('canopy');
  modaljobRole.classList.add('canopy');
  modaljobYear.classList.add('year');

  modaljobCompany.innerHTML = project.experience.company;
  modaljobRole.innerHTML = project.experience.role;
  modaljobYear.innerHTML = project.experience.year;

  modaljobHistoryList.append(modaljobCompany);
  modaljobHistoryList.append(modaljobRole);
  modaljobHistoryList.append(modaljobYear);
  modal.append(modalTitle);
  modal.append(modaljobHistoryList);
  const modalCloseIcon = document.createElement('img');
  modalCloseIcon.classList.add('cancel-modal');
  modalCloseIcon.src = './images/IconTimes.svg';
  modalCloseIcon.addEventListener('click', () => {
    modal.classList.toggle('visible');
    addBlurEffect();
  });
  const modalProjectImage = document.createElement('img');
  modalProjectImage.classList.add('modalImage');
  modalProjectImage.src = project.featuredImage;
  modal.append(modalCloseIcon);
  modal.append(modalProjectImage);

  // modal project description
  const modalDiv = document.createElement('div');
  modalDiv.classList.add('description-and-links');
  const modalPTag = document.createElement('p');
  modalPTag.classList.add('modal-description');
  const modalRightDiv = document.createElement('div');
  modalRightDiv.classList.add('modal-right');

  // modal skills
  const modalSkillsList = document.createElement('ul');
  const modalhtmlSkill = document.createElement('li');
  const modalcsssSkill = document.createElement('li');
  const modaljsSkill = document.createElement('li');
  modalSkillsList.classList.add('my-skills');
  modalhtmlSkill.classList.add('skill-link');
  modalhtmlSkill.classList.add('html-btn');
  modalcsssSkill.classList.add('skill-link');
  modalcsssSkill.classList.add('css-btn');
  modaljsSkill.classList.add('skill-link');
  modaljsSkill.classList.add('js-btn');
  [
    modalhtmlSkill.innerHTML,
    modalcsssSkill.innerHTML,
    modaljsSkill.innerHTML,
  ] = projects[id].technologies;

  modalSkillsList.append(modalhtmlSkill);
  modalSkillsList.append(modalcsssSkill);
  modalSkillsList.append(modaljsSkill);

  modalRightDiv.append(modalSkillsList);

  const hrDiv = document.createElement('div');
  hrDiv.classList.add('hr');
  const hr = document.createElement('hr');
  hrDiv.append(hr);
  modalRightDiv.append(hrDiv);

  // buttons
  const buttonsDiv = document.createElement('div');
  buttonsDiv.classList.add('btns');
  const projectLiveLink = document.createElement('a');
  const sourceCodeLink = document.createElement('a');
  projectLiveLink.href = '';
  sourceCodeLink.href = '';
  projectLiveLink.classList.add('see-project-btn');
  sourceCodeLink.classList.add('see-project-btn');
  projectLiveLink.innerHTML = 'See Live';
  sourceCodeLink.innerHTML = 'See Source';
  buttonsDiv.append(projectLiveLink);
  buttonsDiv.append(sourceCodeLink);
  modal.append(modalRightDiv);
  modal.append(buttonsDiv);
}

// open and close modal
const displayDetailsModal = () => {
  modal.classList.toggle('visible');
  addBlurEffect();
  displayModal(2);
};

// loop through the projects
for (let i = 0; i < projects.length; i += 1) {
  // create card
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');
  cardDiv.classList.add('first-column');

  // first column card image
  const imageDiv = document.createElement('div');
  imageDiv.classList.add('project-image');
  imageDiv.classList.add('first-column');
  const cardImage = document.createElement('img');
  cardImage.src = projects[i].featuredImage;
  imageDiv.appendChild(cardImage);

  // second column
  const div = document.createElement('div');
  div.classList.add('second-column');
  // card project title
  const projectTitle = document.createElement('h3');
  projectTitle.classList.add('project-title');
  projectTitle.innerText = projects[i].name;
  div.appendChild(projectTitle);

  // project ul job experience
  const jobHistoryList = document.createElement('ul');
  const jobCompany = document.createElement('li');
  const jobRole = document.createElement('li');
  const jobYear = document.createElement('li');
  jobHistoryList.classList.add('project-links');
  jobCompany.classList.add('canopy');
  jobRole.classList.add('canopy');
  jobYear.classList.add('year');
  jobCompany.innerHTML = projects[i].experience.company;
  jobRole.innerHTML = projects[i].experience.role;
  jobYear.innerHTML = projects[i].experience.year;
  const cardProjectDescription = document.createElement('div');
  cardProjectDescription.classList.add('project-description');
  const pTag = document.createElement('p');
  cardProjectDescription.appendChild(pTag);
  pTag.innerHTML = projects[i].description;
  div.appendChild(cardProjectDescription);

  jobHistoryList.appendChild(jobCompany);
  jobHistoryList.appendChild(jobRole);
  jobHistoryList.appendChild(jobYear);
  div.appendChild(jobHistoryList);

  // my skills
  const mySkillsList = document.createElement('ul');
  const htmlSkill = document.createElement('li');
  const csssSkill = document.createElement('li');
  const jsSkill = document.createElement('li');
  mySkillsList.classList.add('my-skills');
  htmlSkill.classList.add('skill-link');
  htmlSkill.classList.add('html-btn');
  csssSkill.classList.add('skill-link');
  csssSkill.classList.add('css-btn');
  jsSkill.classList.add('skill-link');
  jsSkill.classList.add('js-btn');
  [htmlSkill.innerHTML, csssSkill.innerHTML, jsSkill.innerHTML] = projects[i].technologies;
  mySkillsList.appendChild(htmlSkill);
  mySkillsList.appendChild(csssSkill);
  mySkillsList.appendChild(jsSkill);
  div.appendChild(mySkillsList);

  // see project button
  const seeProjectBtn = document.createElement('button');
  seeProjectBtn.classList.add('see-project-btn');
  seeProjectBtn.classList.add('open-modal-btn');
  seeProjectBtn.innerHTML = 'See Project';
  div.appendChild(seeProjectBtn);
  seeProjectBtn.addEventListener('click', displayDetailsModal);
  cardDiv.appendChild(imageDiv);
  cardDiv.appendChild(div);
  projectsSection.append(cardDiv);
}

const form = document.querySelector('form');
const emailInput = document.getElementById('youremail');

form.addEventListener('submit', (e) => {
  const emailLowerCase = emailInput.value.trim().toLowerCase();
  const errorDiv = document.createElement('div');

  if (emailInput.value !== emailLowerCase) {
    e.preventDefault();
    errorDiv.innerHTML = 'Please write your email in lower case';
    errorDiv.classList.add('error');
    form.append(errorDiv);
  } else {
    errorDiv.classList.remove('error');
    errorDiv.style.opacity = 0;
  }
});