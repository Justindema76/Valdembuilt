// YEAR
document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // NAVBAR
  const menuToggler = document.getElementById("menu-toggler");
  const sideMenu = document.getElementById("offcanvas-menu");
  const closeMenu = document.getElementById("close-menu");

  if (menuToggler && sideMenu) {
    menuToggler.addEventListener("click", (e) => {
      e.stopPropagation();
      sideMenu.classList.add("active");
    });
  }

  if (closeMenu && sideMenu) {
    closeMenu.addEventListener("click", () => {
      sideMenu.classList.remove("active");
    });
  }

  if (sideMenu) {
    document.addEventListener("click", (e) => {
      if (!sideMenu.contains(e.target) && e.target !== menuToggler) {
        sideMenu.classList.remove("active");
      }
    });

    sideMenu.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }

  // Back to Top Button Functionality
  const backToTop = document.getElementById("backToTop");
  if (backToTop) {
    window.addEventListener("scroll", () => {
      backToTop.style.display = window.scrollY > 200 ? "flex" : "none";
    });
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // GALLERY PROJECTS HEADER
  const title = document.querySelector(".project-title h2");
  if (title) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            title.classList.add("visible");
          } else {
            title.classList.remove("visible");
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(title);
  }

  // GALLERY ANIMATION
  const headings = document.querySelectorAll(".scroll-animate");
  if (headings.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    headings.forEach(heading => observer.observe(heading));
  }

  // NAVBAR ICON
  const togglerIcon = document.querySelector(".navbar-toggler i.bi-three-dots-vertical");
  if (togglerIcon) {
    togglerIcon.addEventListener("click", () => {
      console.log("Toggler dots clicked!");
      togglerIcon.style.color = "#053050";
      togglerIcon.style.transform = "translateY(-10px)";
    });
  }
});
// SEO Enhancements - Lazy Load Images
const addLazyLoading = (img) => {
  if (!img.hasAttribute("loading")) {
    img.setAttribute("loading", "lazy");
  }
  if (!img.hasAttribute("alt")) {
    img.setAttribute("alt", "Valdem Built Inc - Luxury Design & Construction");
  }
};

// Add lazy loading to all images on the page
document.querySelectorAll("img").forEach(addLazyLoading);

// Observe for new images added to the DOM
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.tagName === "IMG") {
        addLazyLoading(node);
      }
    });
  });
});

// Observe the document body for changes
observer.observe(document.body, {
  childList: true,
  subtree: true,
});
