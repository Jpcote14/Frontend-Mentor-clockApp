//J'ai atteint le nombre de requetes maximums donc il ne s'affiche plus...

async function obtenirGeolocalisation() {
  const cleApi = "ipb_live_Yg7GDnEzroIgy6gRIUcO4AhEk9d5EroeE3Y9wBVI";
  const url = `https://api.ipbase.com/v2/info?apikey=${cleApi}`;

  try {
    const reponse = await fetch(url);
    const donnees = await reponse.json();
    console.log(donnees);

    const ville = donnees.data.location.city.name;
    const region = donnees.data.location.region.name;
    const pays = donnees.data.location.country.name;
    const fuseauHoraire = donnees.data.timezone.id;

    console.log(`Ville: ${ville}`);
    console.log(`Région: ${region}`);
    console.log(`Pays: ${pays}`);
    // console.log(`Fuseau horaire: ${fuseauHoraire}`);

    document.getElementById("ville").innerText = ville;
    document.getElementById("pays").innerText = pays;
    // document.getElementById("fuseauHoraire").innerText = fuseauHoraire;
  } catch (error) {
    console.error("Erreur lors de la récupération des données de géolocalisation:", error);
  }
}

obtenirGeolocalisation();
