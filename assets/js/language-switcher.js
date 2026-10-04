document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-lang]").forEach(function (a) {
    a.addEventListener("click", function (e) {
      try {
        localStorage.setItem("LANGUAGE", e.currentTarget.getAttribute("data-lang"));
      } catch (err) {}
    });
  });
});
