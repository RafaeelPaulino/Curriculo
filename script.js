const sections = document.querySelectorAll("section");
const menuLinks = document.querySelectorAll("nav ul li a");

function updateActiveLink() {
  let current = "";
  const scrollPos = window.scrollY + 100;

  sections.forEach(section => {
    if(scrollPos >= section.offsetTop){
      current = section.getAttribute("id");
    }
  });

  menuLinks.forEach(link => {
    link.classList.remove("active");
    if(link.getAttribute("href") === `#${current}`){
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveLink);
