// Поточний рік у футері
document.addEventListener("DOMContentLoaded", function () {
  var yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Мобільне меню
  var nav = document.querySelector(".main-nav");
  var toggle = document.querySelector(".nav-toggle");
  if (nav && toggle) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }
});
