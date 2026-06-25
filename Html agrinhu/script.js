// ANIMAÇÃO DE REVELAÇÃO (FADE-IN) PARA AS FOTOS DA CAPIVARA
const imagensCapivara = document.querySelectorAll('.img-frame, .vitrine-img-box');

const imgObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      imgObserver.unobserve(entry.target); // Ativa a animação apenas uma vez
    }
  });
}, {
  threshold: 0.15 // Ativa quando 15% da imagem surgir na tela
});

imagensCapivara.forEach(img => {
  // Configura o estado inicial invisível e deslocado para baixo
  img.style.opacity = "0";
  img.style.transform = "translateY(30px)";
  img.style.transition = "opacity 1s ease-out, transform 1s ease-out";
  
  imgObserver.observe(img);
});
