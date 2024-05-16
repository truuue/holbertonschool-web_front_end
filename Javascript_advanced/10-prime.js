function countPrimeNumbers() {
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) if (num % i === 0) return false;
    return num > 1;
  }

  return Array.from({ length: 99 }, function (_, i) {
    return i + 2;
  }).filter(isPrime).length;
}

const startTimer = performance.now();

for (let exec = 0; exec < 100; exec++) {
  countPrimeNumbers();
}

const endTimer = performance.now();

const runingTime = endTimer - startTimer;

console.log(
  "Execution time of calculating prime numbers 100 times was",
  runingTime,
  " milliseconds."
);
