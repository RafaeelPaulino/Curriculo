// Seleção das seções e links do menu
const sections = document.querySelectorAll("section");
const menuLinks = document.querySelectorAll("nav ul li a");

// Função para atualizar o link ativo ao rolar a página
function updateActiveLink() {
  let current = "";
  const scrollPos = window.scrollY + 100; // ajuste fino

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

// Adiciona o evento de scroll
window.addEventListener("scroll", updateActiveLink);

// Scroll suave ao clicar nos links do menu
menuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
