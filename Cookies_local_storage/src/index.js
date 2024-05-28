function setCookies() {
  const firstnameValue = document.getElementById("firstname").value;
  const emailValue = document.getElementById("email").value;

  document.cookie = `firstname=${firstnameValue}; path=/`;

  document.cookie = `email=${emailValue}; path=/`;
}

function showCookies() {
  const paragraph = document.createElement("p");
  const cookies = document.cookie;

  paragraph.innerHTML = `Cookies: ${cookies}`;

  document.body.appendChild(paragraph);
}
