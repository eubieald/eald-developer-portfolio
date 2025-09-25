document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("topnav");
  const icon = document.querySelector(".topnav .icon");

  if (icon && nav) {
    icon.addEventListener("click", () => {
      nav.classList.toggle("responsive");
    });
  }
});
