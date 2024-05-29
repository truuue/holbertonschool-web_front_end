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
  // Récupère la valeur du cookie "email"
  const email = getCookie("email");
  // Récupère la valeur du cookie "firstname"
  const firstname = getCookie("firstname");

  // Définit le contenu du paragraphe avec les cookies
  paragraph.innerHTML = `Email: ${email} - Firstname: ${firstname}`;
  // Ajoute le paragraphe au corps du document
  document.body.appendChild(paragraph);
}

function getCookie(name) {
  // Sépare tous les cookies en utilisant le point-virgule et l'espace comme séparateurs
  const cookies = document.cookie.split("; ");
  // Parcourt tous les cookies
  for (let i = 0; i < cookies.length; i++) {
    // Sépare chaque cookie en utilisant le signe égal comme séparateur
    const cookie = cookies[i].split("=");
    // Vérifie si le nom du cookie correspond à celui recherché
    if (cookie[0] === name) {
      // Retourne la valeur du cookie
      return cookie[1];
    }
  }
  // Retourne une chaîne vide si le cookie n'est pas trouvé
  return "";
}
