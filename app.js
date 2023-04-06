const navLinks = document.getElementById('menu-links');
const hamburger = document.getElementById('hamburger');
const maincontent = document.getElementById('maincontent');
const iconCancel = document.querySelector('#iconCancel');
const menuLinks = document.querySelectorAll('.menu-anchor');
const projects = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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

const form = document.getElementById('contactme');
const emailInput = document.getElementById('youremail');

const portfolio = document.getElementById('portfolio');
// create project card
projects.forEach((project) => {
  const cardDiv = document.createElement('div');
  const cardContent = `
    <div class="card">
          <div class="first-column">
            <img src=${project.featuredImage} alt="">
          </div>
          
          <div class="second-column">
            <h3 class="card-title">${project.name}</h3>
            <ul class="experience">
              <li class="canopy">${project.experience.company}</li>
              <li class="career-role">${project.experience.role}</li>
              <li class="year">${project.experience.year}</li>
            </ul>
            <div class="project-description">
              <p>${project.description}</p>
              
            </div>
            
            <ul class="my-skills">
              <li class="skill-link">${project.technologies[0]}</li>
              <li class="skill-link">${project.technologies[1]}</li>
              <li class="skill-link">${project.technologies[2]}</li>
            </ul>
            <button class="see-project-btn" id='project-btn-${project.id}'>See project</button>
          </div>
        </div>
  `;
  cardDiv.innerHTML = cardContent;
  portfolio.append(cardDiv);
});

// create Modal
function createModal(
  id,
  name,
  experience,
  description,
  featuredImage,
  technologies,
) {
  return `
    <div class="modal" id="details-modal-${id}">
      <div>
        <h3 id="modal-title" class="project-title">${name}</h3>
      </div>
      <ul class="project-links">
        <li id="comapany" class="canopy">${experience.company}</li>
        <li id="role" class="career-role">${experience.role}</li>
        <li id="jobyear" class="year">${experience.year}</li>
      </ul>
      <img id='closeIcon-${id}' src="./images/IconTimes.svg" class="cancel-modal" alt="close icon">
      <img id="modalImage" src=${featuredImage} alt="avocode project-image" srcset="">
      <div id="cardDescription" class="description-and-links">
        <p class="modal-description">${description}</p>
        <div class="modal-right">
          <ul class="my-skills">
            <li><a href="#" class="skill-link html-btn">${technologies[0]}</a></li>
            <li><a href="#" class="skill-link css-btn">${technologies[1]}</a></li>
            <li><a href="#" class="skill-link js-btn">${technologies[2]}</a></li>

          </ul>
          <div class="hr">
            <hr>
          </div>
          <div class="btns">
            <a href="" class="see-project-btn">See live</a>
            <a href="" class="see-project-btn">See Source</a>
          </div>
        </div>
      </div>
    </div> 
  `;
}

let modalCard = '';
projects.forEach((item) => {
  const modalDetails = createModal(
    item.id,
    item.name,
    item.experience,
    item.description,
    item.featuredImage,
    item.technologies,
  );
  modalCard += modalDetails;
});

const modalSection = document.getElementById('modal-backdrop');
modalSection.innerHTML = modalCard;
const backdropParent = document.getElementById('backdropParen');
backdropParent.append(modalSection);

projects.forEach((item) => {
  const { id } = item;
  document.getElementById(`project-btn-${id}`).addEventListener('click', () => {
    document.getElementById(`details-modal-${id}`).classList.add('visible');
  });
  document.getElementById(`closeIcon-${id}`).addEventListener('click', () => {
    document.getElementById(`details-modal-${id}`).classList.remove('visible');
  });
});

// Email Validation
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

// Local Storage
const { name: nameInput, email, message: messageInput } = form.elements;
form.addEventListener('input', () => {
  const userData = {
    name: nameInput.value,
    email: email.value,
    message: messageInput.value,
  };

  // store data in local storage
  const userDataString = JSON.stringify(userData);
  localStorage.setItem('user', userDataString);
});

// get data from local storage
const userDataFromLocalStorage = JSON.parse(localStorage.getItem('user')) || {};
nameInput.value = userDataFromLocalStorage.name || '';
email.value = userDataFromLocalStorage.email || '';
messageInput.value = userDataFromLocalStorage.message || '';