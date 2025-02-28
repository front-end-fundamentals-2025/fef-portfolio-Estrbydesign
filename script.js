const buttonElement = document.getElementById("dark-mode");

let theme = "light-mode";
localStorage.theme = theme;
// let newtheme = localStorage.theme;

// if (theme === "dark-mode"){
//     document.body.classList.add("dark-mode")
// } else{
//     document.body.classList.remove("dark-mode");
// }

buttonElement.addEventListener("click", function (event) {
  document.body.classList.add("dark-mode");
  localStorage.theme = theme;
});

if (document.body.classList.contains("dark-mode")) {
  localStorage.theme = "dark-mode";
} else {
  localStorage.theme = "light-mode";
}
