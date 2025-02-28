
const buttonElement = document.getElementById("dark-mode");

let theme = localStorage.getItem("theme");
document.body.classList.toggle("dark-mode", theme === "dark-mode");

buttonElement.addEventListener("click", function () {
  let currentTheme;

  if (document.body.classList.contains("dark-mode")) {
    currentTheme = "light-mode";
  } else {
    currentTheme = "dark-mode";
  }

  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", currentTheme);
});