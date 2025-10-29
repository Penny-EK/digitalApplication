// fun fact generator
document.addEventListener("DOMContentLoaded", funFact);

function funFact() {
  const funFactDisplay = document.getElementById("funFactContainer");
  const funFacts = [
    "Jeg elsker at vandre i naturen.",
    "I 2024 så jeg 15 forskellige koncerter.",
    "Jeg elsker brætspil.",
    "Jeg kan godt lide at lave mad.",
    "Jeg har en stor samling af LEGO.",
    "Min yndlingsfilm er 'Burn After Reading'.",
    "Mit yndlingsband er Red Hot Chili Peppers.",
    "Jeg er navngivet efter filmen 'Almost Famous'.",
    "Min interesse for kodning startede i gymnasiet.",
    "Min interesse for design startede i 5. klasse.",
    "Jeg kan godt lide at læse bøger – især science fiction og biografier om rockstjerner.",
    "Jeg har en kat, som hedder Carlo Fernando.",
    "Jeg kan ikke fordrage jordbær.",
    "Jeg elsker at danse.",
    "Min yndlingsis er pistacieis.",
    "Jeg så engang 'Tim Burton’s The Nightmare Before Christmas' 19 gange på en måned.",
    "Jeg er i gang med at lære at spille trommer.",
    "Min go-to karakter i Mario Kart er altid Toad.",
    "Jeg elsker at tage til havet og koble af, når hverdagen har været stressende.",
  ];
  function displayRandomFunFact() {
    const randomFact = Math.floor(Math.random() * funFacts.length);
    funFactDisplay.textContent = funFacts[randomFact];
  }
  setInterval(displayRandomFunFact, 5000);
  displayRandomFunFact();
}
