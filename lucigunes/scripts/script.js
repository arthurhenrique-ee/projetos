function openMenu()  {
    let menu = document.querySelector('.menu-mobile')
    let header = document.querySelector('#header')
    if (menu.style.left == '0px') {
        menu.style.left = '-200px'
        menu.style.backgroundColor = 'transparent'
        if (window.scrollY < 50) {
            header.classList.remove('scrolled')
        }
    } else {
        menu.style.left = '0px'
        menu.style.backgroundColor = 'white'
        if (window.scrollY < 50) {
            header.classList.add('scrolled')
        }
    }
}

function clickLink() {
    let menu = document.querySelector('.menu-mobile')
    if (menu.style.left == '0px') {
        menu.style.left = '-200px'
    } else {
        menu.style.left = '0px'
    }
}

function showText() {
    let botao = document.querySelector('.btn-show')
    let texto = document.querySelector('.txt-hidden')
    if (botao.innerHTML == 'Ler mais') {
        botao.innerHTML = 'Ler menos'
        texto.style.display = 'block'
    } else {
        botao.innerHTML = 'Ler mais'
        texto.style.display = 'none'
    }
}

document.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

function toggleAnswer(question) {
    let listItem = question.parentNode.parentNode;
    let answer = listItem.querySelector('.answer');
    let height = answer.clientHeight;

    if (height === 0) {
        answer.style.height = answer.scrollHeight + 'px';
    } else {
        answer.style.height = '0';
    }
}

var cont = 1
setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg() {
    cont ++

    if (cont > 5) {
        cont = 1
    }

    document.getElementById('radio' + cont).checked = true
}