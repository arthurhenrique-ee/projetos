aulas = document.querySelectorAll('.box-aula')

aulas.forEach(aula => {
    if (aula.classList.contains('pilates')) {
        aula.querySelector('.prof').innerHTML = 'Professora Adriana'
    } else {
        if(aula.classList.contains('jiujitsu')) {
            aula.querySelector('.prof').innerHTML = 'Professor Robson'
        } else {
            if (aula.classList.contains('taekwondo')) {
                aula.querySelector('.prof').innerHTML = 'Professora Waldirene'
            }
        }
    }
});