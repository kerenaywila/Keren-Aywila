const menuToggle = document.querySelector(".menu-toggle");
const navBar= document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navBar.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navBar.classList.remove("active");
  })
);
