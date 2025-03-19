let dias = document.querySelectorAll('.day');
let contents = document.querySelectorAll('.content');

let contentDom = document.querySelector('.content-dom')
let contentSeg = document.querySelector('.content-seg')
let contentTer = document.querySelector('.content-ter')
let contentQua = document.querySelector('.content-qua')
let contentQui = document.querySelector('.content-qui')
let contentSex = document.querySelector('.content-sex')
let contentSab = document.querySelector('.content-sab')

contents.forEach(content => {
    if (!content.classList.contains('content-seg')) {
        content.style.display = 'none'
    }
})

dias.forEach(dia => {
    dia.addEventListener('click', () => {
        dias.forEach(d => d.classList.remove('checked'));
        dia.classList.add('checked');

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
                    } else {
                        if (dia.classList.contains('qui')) {
                            contentQui.style.display = 'block'
                        } else {
                            if (dia.classList.contains ('sex')) {
                                contentSex.style.display = 'block'
                            } else {
                                if (dia.classList.contains('sab')) {
                                    contentSab.style.display = 'block'                                
                                }
                            }
                        }
                    }
                }
            }
        }
    });
});