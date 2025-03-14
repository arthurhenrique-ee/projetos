let btnSobreMim = document.querySelector('.btn-sobre-mim')

btnSobreMim.onmousemove = function(e) {
    var x = e.pageX - btnSobreMim.offsetLeft
    var y = e.pageY - btnSobreMim.offsetTop

    btnSobreMim.style.setProperty('--eixoX', x + 'px')
    btnSobreMim.style.setProperty('--eixoY', y + 'px')
}