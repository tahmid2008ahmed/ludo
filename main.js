(function () {
  // Select elements
  const editNamesBtn = document.getElementById("editNames");
  const setNamesSection = document.querySelector(".setNames");
  const submitPlayersNamesBtn = document.getElementById("submitPlayersNames");
  const playerOneNameInput = document.getElementById("playerOneName");
  const playerTwoNameInput = document.getElementById("playerTwoName");
  const playBtn = document.getElementById("play");
  const resetBtn = document.getElementById("reset");
  const scoreElements = document.querySelectorAll(".score");
  const winnerText = document.querySelector(".winner");

  // Default player names and winning score
  let playerOneName = "Player One";
  let playerTwoName = "Player Two";
  let winningScore = 10;

  // Scores for both players
  let playerOneScore = 0;
  let playerTwoScore = 0;
  let playerOneTotalScore = 0;
  let playerTwoTotalScore = 0;

  // Function to show the set names section with animation
  function showSetNames() {
    setNamesSection.style.display = "block";
    setNamesSection.classList.add("slide-in");
  }

  // Function to hide the set names section with animation
  function hideSetNames() {
    setNamesSection.classList.remove("slide-in");
    setNamesSection.classList.add("slide-out");
    // Wait for animation to finish before hiding the section
    setTimeout(() => {
      setNamesSection.style.display = "none";
      setNamesSection.classList.remove("slide-out");
    }, 500);
  }

  // Function to handle play button click
  function playGame() {
    // Generate random numbers for each player (1-6)
    const playerOneRoll = Math.floor(Math.random() * 6) + 1;
    const playerTwoRoll = Math.floor(Math.random() * 6) + 1;

    // Update scores
    playerOneScore = playerOneRoll;
    playerOneTotalScore += playerOneRoll;
    playerTwoScore = playerTwoRoll;
    playerTwoTotalScore += playerOneRoll;

    // Update the score elements
    scoreElements[0].textContent = playerOneScore;
    scoreElements[1].textContent = playerTwoScore;

    // Check if any player has reached the winning score
    if (playerOneTotalScore >= winningScore) {
      winnerText.textContent = `${playerOneName} won the game!`;
      playBtn.disabled = true; // Disable play button after winning
    } else if (playerTwoTotalScore >= winningScore) {
      winnerText.textContent = `${playerTwoName} won the game!`;
      playBtn.disabled = true; // Disable play button after winning
    }
  }

  // Function to reset the game
  function resetGame() {
    playerOneScore = 0;
    playerOneTotalScore = 0;
    playerTwoScore = 0;
    playerTwoTotalScore = 0;
    playerOneName = "player one";
    playerTWoName = "player two";

    scoreElements[0].textContent = playerOneScore;
    scoreElements[1].textContent = playerTwoScore;
    winnerText.textContent = "";
    playBtn.disabled = false; // Enable play button
  }

  // Event listeners
  editNamesBtn.addEventListener("click", showSetNames);

  submitPlayersNamesBtn.addEventListener("click", () => {
    resetGame();
    // Update player names from input fields if provided
    playerOneName = playerOneNameInput.value.trim() || "Player One";
    playerTwoName = playerTwoNameInput.value.trim() || "Player Two";

    // Hide set names section after submitting
    hideSetNames();
  });

  playBtn.addEventListener("click", playGame);
  resetBtn.addEventListener("click", resetGame);
})();
