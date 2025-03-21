let indiceAtual = 0;
const slides = document.querySelectorAll(".slide");

function mudarSlide(direcao) {
    slides[indiceAtual].classList.remove("active");
    indiceAtual = (indiceAtual + direcao + slides.length) % slides.length;
    slides[indiceAtual].classList.add("active");
}

// Troca de imagem automática a cada 5 segundos
setInterval(() => mudarSlide(1), 5000);