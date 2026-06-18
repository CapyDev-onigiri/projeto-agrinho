// MENU HAMBURGUER (mobile)
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  const hamburger = document.getElementById("hamburger");

  nav.classList.toggle("active");
  hamburger.classList.toggle("active");
}

// FECHAR MENU AO CLICAR EM LINK (mobile)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("navLinks").classList.remove("active");
    document.getElementById("hamburger").classList.remove("active");
  });
});

// SCROLL SUAVE ENTRE SEÇÕES
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// ENVIO DE FORMULÁRIO
function enviarForm() {
  const inputs = document.querySelectorAll(".formulario input, .formulario textarea");

  let vazio = false;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      vazio = true;
    }
  });

  if (vazio) {
    alert("⚠️ Preenche todos os campos antes de enviar!");
    return;
  }

  alert("🌿 Mensagem enviada com sucesso! Obrigado por participar.");

  inputs.forEach(input => input.value = "");
}

// ANIMAÇÃO DAS BARRAS AO APARECER NA TELA
const barras = document.querySelectorAll(".barra-fill");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.transition = "width 1.5s ease-in-out";
    }
  });
}, {
  threshold: 0.5
});

barras.forEach(barra => {
  barra.style.width = "0%";

  observer.observe(barra);

  setTimeout(() => {
    barra.style.width = barra.getAttribute("style").match(/width:\s*(\d+%)/)?.[1] || barra.style.width;
  }, 300);
});
