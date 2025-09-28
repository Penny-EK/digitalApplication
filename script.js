// themeSwithcer
document.addEventListener("DOMContentLoaded", themeSwitcher);

function themeSwitcher() {
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
}

// fun fact generator

document.addEventListener("DOMContentLoaded", funFact);

function funFact() {
  const funFactDisplay = document.getElementById("funFactContainer");
  const funFacts = ["Jeg elsker at vandre i naturen.", "I 2024 så jeg 15 forskellige koncerter.", "Jeg elsker brætspil.", "Jeg kan godt lide at lave mad.", "Jeg har en stor samling af Lego", "Min yndlingsfilm er burn after reading", "Mit yndlingsband er Red Hot Chili Peppers", "Jeg er navgivet efter filmen 'almost famous'", "Min interesse for kodning startede i gymnasiet.", "Min interesse for design startede i 5. klasse.", "Jeg kan godt lide at læse bøger, især science fiction og biografier fra rockstjerner🤘🏼.", "efter multimediedesign vil jeg gerne læse webudvikling"];
  function displayRandomFunFact() {
    const randomFact = Math.floor(Math.random() * funFacts.length);
    funFactDisplay.textContent = funFacts[randomFact];
  }
  setInterval(displayRandomFunFact, 5000);
  displayRandomFunFact();
}
