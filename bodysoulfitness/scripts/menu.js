let body = document.querySelector('#body')
let header = document.querySelector('#header')
let btnMenuMobile = document.querySelector('.btn-menu')
let btnCloseMenu = document.querySelector('.btn-close-menu')
let menuMobile = document.querySelector('.menu-mobile')
let linksMenuMobile = document.querySelectorAll('.link-menu-mobile')

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('ativo')
    } else {
        header.classList.remove('ativo')
    }
})

btnMenuMobile.addEventListener('click', () => {
    menuMobile.classList.toggle('active')
    body.classList.toggle('no-scroll')
})

btnCloseMenu.addEventListener('click', () => {
    menuMobile.classList.remove('active')
    body.classList.remove('no-scroll')
})

linksMenuMobile.forEach(link => {
    link.addEventListener('click', () => {
        menuMobile.classList.remove('active')
    })
})