// Seleção unificada das seções e links
const sections = document.querySelectorAll("section");
const menuLinks = document.querySelectorAll("nav ul li a");
const projetoCards = document.querySelectorAll(".projeto-card");

// Função para atualizar link ativo no menu
function updateActiveLink() {
  let current = "";
  const scrollPos = window.scrollY + 100; // ajuste fino para topo do viewport

  sections.forEach((section) => {
    if (scrollPos >= section.offsetTop) {
      current = section.getAttribute("id");
    }
  });

  menuLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

// Scroll suave ao clicar nos links
menuLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Expandir projetos com animação de altura suave
projetoCards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("expanded");
    if (card.classList.contains("expanded")) {
      card.style.maxHeight = card.scrollHeight + "px";
    } else {
      card.style.maxHeight = "200px"; // altura padrão
    }
  });
});

// Observador para animação de entrada das seções com fade + slide
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // evita reativar a animação
      }
    });
  },
  {
    threshold: 0.2, // 20% da seção visível para ativar
  }
);

sections.forEach((section) => {
  // Configura o estado inicial para animar
  section.style.opacity = 0;
  section.style.transform = "translateY(50px)";
  observer.observe(section);
});

// Evento de scroll principal
window.addEventListener("scroll", updateActiveLink);

// Inicializa a primeira verificação de link ativo
updateActiveLink();
