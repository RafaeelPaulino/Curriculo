// Scroll ativo no menu
const sections = document.querySelectorAll("section");
const menuLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  menuLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Scroll suave
menuLinks.forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Expandir projetos
const projetoCards = document.querySelectorAll(".projeto-card");

projetoCards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("expanded");
  });
});

// Animação de entrada das seções
window.addEventListener("load", () => {
  const allSections = document.querySelectorAll("section");
  allSections.forEach((section) => {
    section.style.opacity = 1;
    section.style.transform = "translateY(0)";
  });
});

