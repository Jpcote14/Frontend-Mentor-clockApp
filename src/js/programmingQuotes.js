const quote = document.getElementById("quote");
const auteur = document.getElementById("auteur");
const refreshIcon = document.getElementById("refreshIcon");

function fetchRandomQuote() {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      quote.textContent = `"${data.content}"`;
      auteur.textContent = `- ${data.author}`;
    })
    .catch((error) => {
      console.error("Erreur lors de la récupération de la citation :", error);
    });
}

refreshIcon.addEventListener("click", fetchRandomQuote);

fetchRandomQuote();
setInterval(fetchRandomQuote, 10000);
