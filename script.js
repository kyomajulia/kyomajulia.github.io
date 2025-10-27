// =======================================
// Portfólio | Maria Júlia - Desenvolvedora Fullstack
// =======================================

// 🌐 Mensagem no console (branding discreto)
console.log(
  "%cDesenvolvido por Maria Júlia | Fullstack Developer",
  "color:#38bdf8; font-size:14px; font-weight:600;"
);

// 🔄 Scroll suave ao clicar em links internos
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// ✨ Animação de fade-in ao rolar (para seções)
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

// 📧 Feedback ao clicar no botão de contato
const contactBtn = document.querySelector(".btn[href^='mailto']");
if (contactBtn) {
  contactBtn.addEventListener("click", () => {
    alert("Abrindo seu aplicativo de e-mail...");
  });
}


