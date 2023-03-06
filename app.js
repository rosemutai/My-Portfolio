const navLinks = document.getElementById('menu-links');
const hamburger = document.getElementById('hamburger');
const iconCancel = document.getElementById('iconCancel');
const maincontent = document.getElementById('maincontent');

function OpenNavBarMenu() {
  navLinks.style.visibility = 'visible';
  hamburger.style.display = 'none';
  maincontent.classList.add('blur');
}

function closeNavBarMenu() {
  navLinks.style.visibility = 'hidden';
  hamburger.style.display = 'block';
  hamburger.style.position = 'absolute';
  maincontent.classList.remove('blur');
}