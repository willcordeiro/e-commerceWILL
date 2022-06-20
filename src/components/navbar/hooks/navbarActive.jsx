function navbar() {
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-nav");
  hamburger.classList.toggle("is-active");
  mobileMenu.classList.toggle("is-active");
}

export default navbar;
