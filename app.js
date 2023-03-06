let navLinks = document.getElementById('menu-links')
let hamburger = document.getElementById('hamburger')
let iconCancel = document.getElementById('iconCancel')
let maincontent = document.getElementById('maincontent')

function OpenNavBarMenu (){
    navLinks.style.visibility = "visible"
    hamburger.style.display = "none"
    maincontent.classList.add("blur")
}

function closeNavBarMenu (){
    navLinks.style.visibility = "hidden"
    hamburger.style.display = "block"
    hamburger.style.position = "absolute"
    maincontent.classList.remove("blur")
}