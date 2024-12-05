function openMenu () {
    const menu = document.querySelector('.menu-mobile')
    const fundo = document.querySelector('main')
    menu.style.zIndex = "999"
    menu.style.right = "0"
    fundo.style.transition = ".5s"
    fundo.style.filter = "blur(5px)"
}

function closeMenu() {
    const menu = document.querySelector('.menu-mobile')
    const fundo = document.querySelector('main')
    menu.style.right = "-210px"
    fundo.style.transition = ".5s"
    fundo.style.filter = "blur(0px)"
}