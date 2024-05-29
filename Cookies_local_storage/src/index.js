function setCookies() {
  // Récupère la valeur du champ "firstname"
  const firstnameValue = document.getElementById("firstname").value;
  // Récupère la valeur du champ "email"
  const emailValue = document.getElementById("email").value;

  // Crée une nouvelle date en ajoutant 10 jours à la date actuelle
  const expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + 600000);

  // Définit un cookie avec le nom "firstname", la valeur correspondante et la date d'expiration
  document.cookie = `firstname=${firstnameValue}; expires=${expirationDate.toUTCString()}; path=/`;
  // Définit un cookie avec le nom "email", la valeur correspondante et la date d'expiration
  document.cookie = `email=${emailValue}; expires=${expirationDate.toUTCString()}; path=/`;
}

function showCookies() {
  // Crée un élément de paragraphe
  const paragraph = document.createElement("p");
  // Récupère tous les cookies
  const cookies = document.cookie;

  // Définit le contenu du paragraphe avec les cookies
  paragraph.innerHTML = `Cookies: ${cookies}`;
  // Ajoute le paragraphe au corps du document
  document.body.appendChild(paragraph);
}
