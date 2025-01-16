let header = document.querySelector('header')

document.addEventListener('scroll', ()=> {
    let scrollTop = window.scrollY

    if (scrollTop > 0) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
})