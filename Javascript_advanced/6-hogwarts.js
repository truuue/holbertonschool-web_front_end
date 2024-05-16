function studentHogwarts() {
  var privateScore = 0;
  var name = null;

  function changeScoreBy(points) {
    privateScore += points;
  }

  function setName(newName) {
    name = newName;
  }

  function rewardStudent() {
    changeScoreBy(1);
  }

  function penalizeStudent() {
    changeScoreBy(-1);
  }

  function getScore() {
    return name + ": " + privateScore;
  }

  return {
    changeScoreBy: changeScoreBy,
    setName: setName,
    rewardStudent: rewardStudent,
    penalizeStudent: penalizeStudent,
    getScore: getScore,
  };
}

var harry = new studentHogwarts();
harry.setName("Harry");
for (let h = 0; h < 4; h++) {
  harry.rewardStudent();
}
console.log(harry.getScore());

var draco = new studentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
for (let h = 0; h < 3; h++) {
  draco.penalizeStudent();
}
console.log(draco.getScore());
