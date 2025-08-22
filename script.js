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
