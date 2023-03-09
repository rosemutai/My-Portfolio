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

// open and close modal
const toggleDetailsModal = () => {
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

  seeProjectBtn.addEventListener('click', toggleDetailsModal);

  cardDiv.appendChild(imageDiv);
  cardDiv.appendChild(div);
  projectsSection.append(cardDiv);

}

