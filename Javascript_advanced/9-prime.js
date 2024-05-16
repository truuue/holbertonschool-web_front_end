// Fonction qui calcule les nombres premiers dans l'intervalle de 2 à 100.
function countPrimeNumbers() {
  // Fonction qui vérifie si un nombre est premier
  function isPrime(num) {
    // Boucle à travers les nombres de 2 à la racine carrée de num
    for (let i = 2; i <= Math.sqrt(num); i++)
      // Si num est divisible par i, ce n'est pas un nombre premier
      if (num % i === 0) return false;
    // Si aucun des nombres n'a divisé num, alors num est un nombre premier
    return num > 1;
  }

  // Crée un tableau de nombres de 2 à 100
  return (
    // Retourne la longueur du tableau résultant contenant le nombre de nombres premiers
    Array.from({ length: 99 }, function (_, i) {
      return i + 2;
    })
      // Filtre le tableau pour ne conserver que les nombres premiers avec la fonction isPrime
      .filter(isPrime).length
  );
}

// J'initialise le timer en appelant l'API performance
const startTimer = performance.now();

// J'appelle la fonction que je souhaite mesurer
countPrimeNumbers();

// Je rappelle l'API performance pour connaître le temps après exécution
const endTimer = performance.now();

// Je calcule le temps d'exécution en soustrayant le temps à la fin de l'exécution au temps avant l'exécution
const runingTime = endTimer - startTimer;

// Je console.log le temps d'exécution de la fonction en millisecondes
console.log(
  "Execution time of printing countPrimeNumbers was ",
  runingTime,
  " milliseconds."
);
