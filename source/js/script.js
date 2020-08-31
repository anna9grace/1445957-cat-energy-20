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


function initMap() {
  var catEnergyOffice = {lat: 59.938797, lng: 30.323060};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: catEnergyOffice
  });

  var image = {
    url: "../img/map-pin.png"
  }

  var marker = new google.maps.Marker({
    position: catEnergyOffice,
    map: map,
    icon: image
  });
}
