var form = document.querySelector(".form");
var formFields = form.querySelectorAll(".fieldset__text:not([name=age]):not([name=comments])");

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
