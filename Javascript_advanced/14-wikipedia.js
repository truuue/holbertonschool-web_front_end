// La fonction demandé de base par la task se trouve si dessous en commentaire

// function createElement(data) {
//   const paragraph = document.createElement("p");
//   paragraph.textContent = data;
//   document.body.append(paragraph);
// }

// Voici un version améliorer pour mieux apprécier l'affichage des données fetch
function createElement(data) {
  const paragraph = document.createElement("p");
  paragraph.textContent = data;

  // A la place d'afficher le paragraphe dans le body grossièrement je l'affiche dans une div avec l'ID 'display-contents'
  const displayContents = document.getElementById("display-contents");
  if (displayContents) {
    displayContents.append(paragraph);
  } else {
    console.error("Element with ID 'display-contents' not found.");
  }
}

function queryWikipedia(callback) {
  const xml = new XMLHttpRequest();
  const url =
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";

  xml.open("GET", url, true);
  xml.onreadystatechange = function () {
    if (xml.readyState === 4 && xml.status === 200) {
      const response = JSON.parse(xml.responseText);
      const extract =
        response.query.pages[Object.keys(response.query.pages)[0]].extract;
      callback(extract);
    }
  };
  xml.send();
}

queryWikipedia(function (extract) {
  createElement(extract);
});

// Pour tester cette fonction de fetch lancez le fichier 14-index.html pour bien afficher le resultat ;)
