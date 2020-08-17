var menuToggle = document.querySelector(".page-header__menu");
var menu = document.querySelector(".main-nav");

var mobile = window.matchMedia("(max-width: 320px)");

if (mobile.matches) {
  menu.classList.add("hidden");
  menuToggle.classList.remove("hidden");
}

menuToggle.addEventListener("click", function(evt) {
    evt.preventDefault();
    menu.classList.toggle("hidden");
    menuToggle.classList.toggle("page-header__menu--open");
    menuToggle.classList.toggle("page-header__menu--close");
  }
)
