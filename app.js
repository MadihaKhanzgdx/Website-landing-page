// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {

  /* ========= NAVBAR & FOOTER THEME SYNC ========= */
  const navbar = document.querySelector(".navbar");
  const footer = document.querySelector(".footer");
  if (navbar && footer) {
    const navbarBg = getComputedStyle(navbar).backgroundColor;
    footer.style.backgroundColor = navbarBg;
  }

  /* ========= SMOOTH SCROLL (SAME PAGE LINKS) ========= */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  /* ========= ACTIVE SECTION HIGHLIGHT ON SCROLL ========= */
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 80;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });

  /* ========= HAMBURGER MENU TOGGLE ========= */
  const menuToggle = document.getElementById("menu-toggle");
  const navLinksContainer = document.getElementById("nav-links");

  if (menuToggle && navLinksContainer) {
    // When the hamburger icon is clicked
    menuToggle.addEventListener("click", () => {
      navLinksContainer.classList.toggle("show");

      // Change the icon between bars and times
      const icon = menuToggle.querySelector("i");
      icon.classList.toggle("fa-bars");
      icon.classList.toggle("fa-times");
    });

    // Close mobile menu when a nav link is clicked
    navLinksContainer.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinksContainer.classList.remove("show");
        const icon = menuToggle.querySelector("i");
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-times");
      });
    });
  }

});
