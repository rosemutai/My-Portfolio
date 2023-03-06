const navLinks = document.getElementById('menu-links');
const hamburger = document.getElementById('hamburger');
const maincontent = document.getElementById('maincontent');

export function OpenNavBarMenu() {
  navLinks.style.visibility = 'visible';
  hamburger.style.display = 'none';
  maincontent.classList.add('blur');
}

export function closeNavBarMenu() {
  navLinks.style.visibility = 'hidden';
  hamburger.style.display = 'block';
  hamburger.style.position = 'absolute';
  maincontent.classList.remove('blur');
}