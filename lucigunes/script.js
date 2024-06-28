function clickMenu()  {
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

function clicou() {
    let menu = document.querySelector('.menu-mobile')
    if (menu.style.left == '0px') {
        menu.style.left = '-200px'
    } else {
        menu.style.left = '0px'
    }
}

function lerMais() {
    let botao = document.querySelector('.btn-ler')
    let texto = document.querySelector('.escondido')
    if (botao.innerHTML == 'Ler mais') {
        botao.innerHTML = 'Ler menos'
        botao.style.backgroundColor = '#EBE6E4'
        botao.style.color = 'black'
        texto.style.display = 'block'
    } else {
        botao.innerHTML = 'Ler mais'
        botao.style.backgroundColor = '#A66363'
        botao.style.color = 'white'
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
    // Encontra o elemento pai da pergunta (<li>)
    let listItem = question.parentNode.parentNode;
    
    // Encontra o elemento resposta dentro do <li> atual
    let answer = listItem.querySelector('.answer');

    // Obtém a altura atual da resposta
    let height = answer.clientHeight;

    // Alterna a altura da resposta
    if (height === 0) {
        answer.style.height = answer.scrollHeight + 'px'; // Define a altura para a altura total da resposta
    } else {
        answer.style.height = '0'; // Define a altura de volta para zero
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