let header = document.querySelector('#header')

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('ativo')
    } else {
        header.classList.remove('ativo')
    }
})