const user = {
  hobby: "Calligraphy",
  favoriteSport: "Hockey",
  astrologicalSign: "Aries",
  firstName: "Buillaume",
  lastName: "Johns",
  location: "Netherlands",
  occupation: "Engineer",
};

function logWelcomeUser(welcomeString) {
  console.log(
    `${welcomeString}, ${user.firstName}. Your occupation is: ${user.occupation}`
  );
}

var bindLogWelcomeUser = logWelcomeUser.bind(user);

bindLogWelcomeUser("Welcome");

// Requirement
bindLogWelcomeUser("Hello");
