let dias = document.querySelectorAll('.day');
let contents = document.querySelectorAll('.content');

let contentDom = document.querySelector('.content-dom')
let contentSeg = document.querySelector('.content-seg')
let contentTer = document.querySelector('.content-ter')
let contentQua = document.querySelector('.content-qua')
let contentQui = document.querySelector('.content-qui')
let contentSex = document.querySelector('.content-sex')
let contentSab = document.querySelector('.content-sab')

contents.forEach(content => content.style.display = 'none');

dias.forEach(dia => {
    dia.addEventListener('click', () => {
        dias.forEach(d => d.classList.remove('checked'));  // Remove a classe de todos os dias
        dia.classList.add('checked');  // Adiciona a classe no dia clicado

        contents.forEach(content => content.style.display = 'none');
        
        if (dia.classList.contains('dom')) {
            contentDom.style.display = 'block'
        } else {
            if (dia.classList.contains('seg')) {
                contentSeg.style.display = 'block'
            } else {
                if (dia.classList.contains('ter')) {
                    contentTer.style.display = 'block'
                } else {
                    if (dia.classList.contains('qua')) {
                        contentQua.style.display = 'block'
                    }
                }
            }
        }
    });
});