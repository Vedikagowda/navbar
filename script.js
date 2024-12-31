// JavaScript for Interactive Navigation Menu
const navbar = document.getElementById("navbar");

// Add 'scrolled' class when page is scrolled
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) { // Check if scrolled more than 50px
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
