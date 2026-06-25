// ANIMAÇÃO DE REVELAÇÃO (FADE-IN) PARA AS FOTOS DA CAPIVARA
document.addEventListener('DOMContentLoaded', () => {
  const imagensCapivara = document.querySelectorAll('.img-frame, .vitrine-img-box');

  if (!('IntersectionObserver' in window)) {
    imagensCapivara.forEach(img => {
      img.style.opacity = "1";
      img.style.transform = "translateY(0)";
    });
    return;
  }

  const imgObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        imgObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  imagensCapivara.forEach(img => {
    img.style.opacity = "0";
    img.style.transform = "translateY(30px)";
    img.style.transition = "opacity 1s ease-out, transform 1s ease-out";
    imgObserver.observe(img);
  });
});
