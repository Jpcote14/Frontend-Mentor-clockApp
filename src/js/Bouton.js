class Bouton {
  // Attribues

  constructor(idBouton, idChevron, idLabel) {
    this.bouton = document.getElementById(idBouton);
    this.chevron = document.getElementById(idChevron);
    this.label = document.getElementById(idLabel);
    this.expansion = document.getElementById("expansion");
    this.quote = document.getElementById("ctnQuote");

    this.ajouterListeners();
  }

  ajouterListeners() {
    this.bouton.addEventListener("click", () => {
      this.toggleChevron();
      this.toggleLabel();
      this.toggleExpansion();
    });
  }

  toggleChevron() {
    this.chevron.classList.toggle("rotate-180");
    this.chevron.classList.toggle("mb-1");
  }

  toggleLabel() {
    if (this.chevron.classList.contains("rotate-180")) {
      this.setLabel("Less");
    } else {
      this.setLabel("More");
    }
  }

  setLabel(nouveauLabel) {
    this.label.textContent = nouveauLabel;
  }

  toggleExpansion() {
    this.quote.classList.toggle("hidden");
    this.expansion.classList.toggle("hidden");
  }
}

const boutonMore = new Bouton("btnMore", "chevron", "btnMoreLibelle");
