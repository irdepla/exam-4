const burgerBtn = document.getElementById("burger-btn");
const navModal = document.getElementById("nav-modal");
const overlay = document.querySelector(".nav__overlay");
const closeBtn = document.querySelector(".nav__modal__logo img:last-child"); // Selecting the close icon

burgerBtn.addEventListener("click", () => {
  navModal.classList.toggle("nav__modal--active");
  overlay.classList.toggle("nav__overlay--active");
});

overlay.addEventListener("click", () => {
  navModal.classList.remove("nav__modal--active");
  overlay.classList.remove("nav__overlay--active");
});

closeBtn.addEventListener("click", () => {
  navModal.classList.remove("nav__modal--active");
  overlay.classList.remove("nav__overlay--active");
});
