document.addEventListener("DOMContentLoaded", function () {
  const themeSwitcher = document.getElementById("themeSwitcher");
  const body = document.body;
  const moonIcon = themeSwitcher.querySelector("#moonIcon");
  const sunIcon = themeSwitcher.querySelector("#sunIcon");
  themeSwitcher.addEventListener("click", function () {
    body.classList.toggle("darkmode");
    if (body.classList.contains("darkmode")) {
      if (moonIcon) moonIcon.style.display = "none";
      if (sunIcon) sunIcon.style.display = "inline";
    } else {
      if (moonIcon) moonIcon.style.display = "inline";
      if (sunIcon) sunIcon.style.display = "none";
    }
  });
});
