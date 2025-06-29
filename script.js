// Login Modal
const loginBtn = document.getElementById("loginBtn");
const loginModal = document.getElementById("loginModal");
const closeBtn = document.querySelector(".close");
const loginForm = document.getElementById("loginForm");
const navbar = document.querySelector(".navbar");

loginBtn.onclick = function () {
  loginModal.style.display = "block";
  navbar.classList.add("hidden-navbar");
};
closeBtn.onclick = function () {
  loginModal.style.display = "none";
  navbar.classList.remove("hidden-navbar");
};
window.onclick = function (event) {
  if (event.target == loginModal) {
    loginModal.style.display = "none";
    navbar.classList.remove("hidden-navbar");
  }
};
loginForm.onsubmit = function (e) {
  e.preventDefault();
  loginModal.style.display = "none";
  navbar.classList.remove("hidden-navbar");
  alert("Xush kelibsiz, " + document.getElementById("username").value + "!");
};

// Hamburger menu (responsive nav)
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.onclick = function () {
  navMenu.classList.toggle("active");
};

// Header Scroll Animation
let lastScrollTop = 0;
const scrollThreshold = 50; // Scroll qilish miqdori kamaytirildi

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Scroll miqdori bo'yicha header stillarini o'zgartirish
  if (scrollTop > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Scroll yo'nalishini aniqlash
  if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
    // Pastga scroll - header yashirinadi
    navbar.classList.add("hidden");
    navbar.classList.remove("visible");
  } else if (scrollTop < lastScrollTop) {
    // Tepaga scroll - header ko'rinadi
    navbar.classList.remove("hidden");
    navbar.classList.add("visible");
  }

  lastScrollTop = scrollTop;
});

// Carousel
const slides = document.querySelectorAll(".carousel-slide");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");
const dots = document.querySelectorAll(".dot");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
  });
  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;
dots.forEach((dot, i) => {
  dot.onclick = () => {
    currentSlide = i;
    showSlide(currentSlide);
  };
});

// Auto carousel
setInterval(nextSlide, 5000);

// Animate skill bars on scroll
function animateSkills() {
  const skills = document.querySelectorAll(".skill-progress");
  skills.forEach((skill) => {
    skill.style.width = skill.getAttribute("style").replace("width:", "");
  });
}
window.addEventListener("scroll", () => {
  const skillsSection = document.querySelector(".skills");
  const rect = skillsSection.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    animateSkills();
  }
});
