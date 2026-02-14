// ==========================================
// MONSTERS GYM - JAVASCRIPT
// ==========================================

// Menu Mobile Toggle
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Close menu when clicking on a link
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  }
});

// Header scroll effect
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ScrollReveal Animations
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
  reset: false,
};

// Header animations
ScrollReveal().reveal(".header__content .badge-promo", {
  ...scrollRevealOption,
  delay: 200,
});

ScrollReveal().reveal(".header__content h4", {
  ...scrollRevealOption,
  delay: 300,
});

ScrollReveal().reveal(".header__content .section__header", {
  ...scrollRevealOption,
  delay: 400,
});

ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOption,
  delay: 600,
});

ScrollReveal().reveal(".header__image", {
  ...scrollRevealOption,
  origin: "right",
  delay: 700,
});

// About section
ScrollReveal().reveal(".about__image", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 200,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 300,
});

ScrollReveal().reveal(".about__card", {
  ...scrollRevealOption,
  interval: 200,
});

// Class section
ScrollReveal().reveal(".text_modalidades", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".class__card", {
  ...scrollRevealOption,
  interval: 200,
});

// Trainer section
ScrollReveal().reveal(".personal_text", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".trainer__card", {
  ...scrollRevealOption,
  origin: "left",
  delay: 200,
});

ScrollReveal().reveal(".trainer__card2", {
  ...scrollRevealOption,
  origin: "right",
  delay: 300,
});

// Price section
ScrollReveal().reveal(".price__container .section__header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".price__container .section__description", {
  ...scrollRevealOption,
  delay: 200,
});

ScrollReveal().reveal(".price__card", {
  ...scrollRevealOption,
  interval: 200,
});

ScrollReveal().reveal(".principal_card--premium", {
  ...scrollRevealOption,
  delay: 400,
});

// Testimonials section
ScrollReveal().reveal(".text_avaliation", {
  ...scrollRevealOption,
});

// Swiper Carousel
const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const headerOffset = 120;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Add animation to background circles
const circles = document.querySelectorAll('.bg-circle');
circles.forEach((circle, index) => {
  circle.style.animationDelay = `${index * 2}s`;
});
