const navLinks = document.getElementById('menu-links');
const hamburger = document.getElementById('hamburger');
const maincontent = document.getElementById('maincontent');
const iconCancel = document.querySelector('#iconCancel');

hamburger.addEventListener('click' , (()=>{
  navLinks.style.visibility = 'visible';
  hamburger.style.display = 'none';
  maincontent.classList.add('blur');
}))

iconCancel.addEventListener('click' , (()=>{
  navLinks.style.visibility = 'hidden';
  hamburger.style.display = 'block';
  hamburger.style.position = 'absolute';
  maincontent.classList.remove('blur');
}))
