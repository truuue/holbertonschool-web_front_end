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

  showWelcomeMessageOrForm();
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
  // Crée une clé avec le nom du cookie
  const key = `${name}=`;
  // Décode la valeur du cookie
  const cookieDecoded = decodeURIComponent(document.cookie);
  // Sépare tous les cookies en utilisant le point-virgule comme séparateur
  const cookieArray = cookieDecoded.split(";");
  // Parcourt tous les cookies
  for (let cookie of cookieArray) {
    // Supprime les espaces au début du cookie
    cookie = cookie.trimStart();
    // Vérifie si le cookie commence par la clé
    if (cookie.indexOf(key) == 0) return cookie.substring(key.length);
  }
  // Retourne une chaîne vide si le cookie n'est pas trouvé
  return "";
}

function showForm() {
  // Supprime le message de bienvenue s'il existe
  const welcomeMessage = document.getElementById("Welcome");
  if (welcomeMessage) {
    welcomeMessage.remove();
    console.log("Welcome message removed");
  } else {
    console.log("Welcome message not found");
  }

  // Affiche le form
  const form = document.getElementById("form");
  if (form) {
    form.style.display = "block";
    console.log("Form displayed");
  } else {
    console.error("Form element not found");
  }
}

function hideForm() {
  // Supprime l'affichage du form
  const form = document.getElementById("form");
  if (form) {
    form.style.display = "none";
  } else {
    console.error("Form element not found");
  }
}

function deleteCookiesAndShowForm() {
  console.log("Deleting cookies and showing form");
  // Définit la date d'expiration de tous les cookies à une date passée
  document.cookie = "firstname=; Max-Age=0; path=/";
  document.cookie = "email=; Max-Age=0; path=/";

  // Affiche le formulaire
  showForm();
}

function showWelcomeMessageOrForm() {
  const firstname = getCookie("firstname");
  const email = getCookie("email");

  if (!firstname || !email) {
    showForm();
  } else {
    hideForm();

    const h1 = document.createElement("h1");
    h1.id = "Welcome";
    const textNode = document.createTextNode(`Welcome ${firstname}`);
    const a = document.createElement("a");
    const linkText = document.createTextNode("(logout)");

    a.href = "#";
    a.style.fontWeight = "normal";
    a.style.fontStyle = "italic";
    a.style.marginLeft = "10px";
    a.onclick = deleteCookiesAndShowForm;

    a.appendChild(linkText);
    h1.appendChild(textNode);
    h1.appendChild(a);

    document.body.appendChild(h1);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");
  showWelcomeMessageOrForm();
});
