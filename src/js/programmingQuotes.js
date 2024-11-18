// Sélection des éléments HTML
const quote = document.getElementById("quote");
const auteur = document.getElementById("author");

// Fonction pour récupérer et afficher une citation aléatoire
function fetchRandomQuote() {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      // Met à jour les éléments avec la citation et l'auteur
      quote.textContent = `"${data.content}"`;
      auteur.textContent = `- ${data.author}`;
    })
    .catch((error) => {
      console.error("Erreur lors de la récupération de la citation :", error);
      quote.textContent = "Une erreur s'est produite.";
      auteur.textContent = "";
    });
}

// Appeler une citation dès le chargement de la page
fetchRandomQuote();

// Mettre à jour la citation toutes les 10 secondes
setInterval(fetchRandomQuote, 10000);
