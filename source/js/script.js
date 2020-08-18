var menuToggle = document.querySelector(".page-header__menu");
var menu = document.querySelector(".main-nav");
var form = document.querySelector(".form");
var formFields = form.querySelectorAll(".fieldset__text:not([name=age]):not([name=comments])");
var catName = form.querySelector("[name=name]");
var weight = form.querySelector("[name=weight]");
var email = form.querySelector("[name=email]");
var tel = form.querySelector("[name=tel]");

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

form.addEventListener("submit", function(evt) {
  for (var formField of formFields) {
    formField.classList.remove("error");
    if (!formField.value) {
      evt.preventDefault();
      formField.classList.add("error");
      }
    }
  }
)
