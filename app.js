
function menu (){
    let navLinks = document.getElementById('menu-links')
    let nav = document.getElementById('nav')
    let iconCancle = document.getElementById('iconCancle')
    nav.style.display = "none"
    navLinks.style.visibility = "visible"
    iconCancle.style.display = "flex"
}

function cancleIcon (){
    let navLinks = document.getElementById('navLinks')
    navLinks.style.visibility = "hidden"
    
    console.log(navLinks);
}