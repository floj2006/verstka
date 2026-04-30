const links = document.querySelectorAll(".menu-link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".menu-link.active")?.classList.remove("active");
    link.classList.add("active");
  });
});
