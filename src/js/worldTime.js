// Appeler fetchTime une fois le DOM chargé
document.addEventListener("DOMContentLoaded", () => {
  fetchTime();
});

// Fonction principale pour récupérer les données depuis l'API
async function fetchTime() {
  try {
    const response = await fetch("http://worldtimeapi.org/api/ip");
    if (!response.ok) throw new Error("Erreur avec l'API World Time");

    const data = await response.json();
    afficherTemps(data);
    changerBackground(data);
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    document.querySelector(".heure").textContent = "Erreur de chargement";
  }
}

// Fonction pour afficher l'heure, le jour de l'année, etc.
function afficherTemps(data) {
  // Extraire l'heure complète (avec secondes)
  const heureComplete = data.datetime.split("T")[1].split(".")[0]; // Exemple : "19:30:45"

  // Extraire uniquement l'heure et les minutes (HH:mm)
  const heureEtMinutes = heureComplete.slice(0, 5); // Exemple : "19:30"

  // Extraire le jour de l'année
  const jourAnnee = data.day_of_year;

  // Extraire le jour de la semaine
  const jourSemaine = data.day_of_week;

  // Extraire le numéro de la semaine
  const semaineAnnee = data.week_number;

  // Sélectionner les éléments HTML pour afficher les données
  const divHeure = document.querySelector(".heure");
  const divJourAnnee = document.querySelector(".jour-annee");
  const divFuseauHoraire = document.querySelector(".currentTimeZone");
  const divJourSemaine = document.querySelector(".dayOfWeek");
  const divNumeroSemaine = document.querySelector(".weekNumber");

  if (divHeure) divHeure.textContent = heureEtMinutes;
  if (divJourAnnee) divJourAnnee.textContent = `${jourAnnee}`;
  if (divFuseauHoraire) divFuseauHoraire.textContent = data.timezone;
  if (divJourSemaine) divJourSemaine.textContent = jourSemaine;
  if (divNumeroSemaine) divNumeroSemaine.textContent = semaineAnnee;
}

function changerBackground(data) {
  const heureActuelle = new Date(data.datetime).getHours();
  const backgroundDiv = document.getElementById("background");

  if (heureActuelle >= 6 && heureActuelle < 18) {
    backgroundDiv.classList.add("bg-imageJourTable");
    backgroundDiv.classList.remove("bg-imageNuitTable");
  } else {
    backgroundDiv.classList.add("bg-imageNuitTable");
    backgroundDiv.classList.remove("bg-imageJourTable");
  }
}
