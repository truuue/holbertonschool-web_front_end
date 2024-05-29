function setCookies() {
  // Récupère la valeur du champ "firstname"
  const firstnameValue = document.getElementById("firstname").value;
  // Récupère la valeur du champ "email"
  const emailValue = document.getElementById("email").value;

  // Définit un cookie avec le nom "firstname" et la valeur correspondante
  document.cookie = `firstname=${firstnameValue}; path=/`;

  // Définit un cookie avec le nom "email" et la valeur correspondante
  document.cookie = `email=${emailValue}; path=/`;
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
