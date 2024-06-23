function clickMenu()  {
    menu = document.querySelector('.menu-mobile')
    if (menu.style.left == '0px') {
        menu.style.left = '-200px'
    } else {
        menu.style.left = '0px'
    }
}

function clicou() {
    menu = document.querySelector('.menu-mobile')
    if (menu.style.left == '0px') {
        menu.style.left = '-200px'
    } else {
        menu.style.left = '0px'
    }
}

function lerMais() {
    botao = document.querySelector('.btn-ler')
    texto = document.querySelector('.escondido')
    if (botao.innerHTML == 'Ler mais') {
        botao.innerHTML = 'Ler menos'
        botao.style.backgroundColor = '#A66363'
        botao.style.color = 'white'
        texto.style.display = 'block'
    } else {
        botao.innerHTML = 'Ler mais'
        botao.style.backgroundColor = '#EBE6E4'
        botao.style.color = 'black'
        texto.style.display = 'none'
    }
}