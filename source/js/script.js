var menuToggle = document.querySelector(".page-header__menu");
var menu = document.querySelector(".main-nav");
var mobile = window.matchMedia("(max-width: 767px)");

if (mobile.matches) {
  menu.classList.add("hidden");
  menuToggle.classList.remove("hidden");
}

var hideMenu = function(mq) {
  if (mq.matches) {
    menuToggle.classList.remove("hidden");
    if (menuToggle.classList.contains("page-header__menu--open")) {
      menu.classList.add("hidden");
    }
  } else {
    menu.classList.remove("hidden");
    menuToggle.classList.add("hidden");
  }
}

mobile.addListener(hideMenu);


menuToggle.addEventListener("click", function(evt) {
    evt.preventDefault();
    menu.classList.toggle("hidden");
    menuToggle.classList.toggle("page-header__menu--open");
    menuToggle.classList.toggle("page-header__menu--close");
  }
)
