function navbar() {
  const hamburger = document.querySelector(".hamburger1");
  const mobileMenu = document.querySelector(".mobile-nav");
  hamburger.classList.toggle("is-active");
  mobileMenu.classList.toggle("is-active");
}

export default navbar;
