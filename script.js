function getComputerChoice() {
   let choice = Math.floor(Math.random() * 3);
   let choiceInWords;

   switch (choice){
      case 0:
         choiceInWords = "Rock";
         break;
      case 1:
         choiceInWords = "Paper";
         break;
      case 2:
         choiceInWords = "Scissors";
         break;
   }

   return choiceInWords;
}

let playerSelection;

function getPlayerChoice() {
   playerSelection = prompt("Rock, paper or scissors?", "Rock");
   playerSelection = playerSelection.toLowerCase()
   playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)

   //checks if the player didn't choose any of the options and ends the script if it didn't
   if (playerSelection.toUpperCase() != "ROCK" && playerSelection.toUpperCase() != "PAPER" && playerSelection.toUpperCase() != "SCISSORS") {
      alert ("You didn't choose either of the options")
      return
   }
   return playerSelection
}

playerSelection = getPlayerChoice()

let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
   let result;
   if (playerSelection == computerSelection) {
      result = "Draw";
   } else if (playerSelection == "Rock" && computerSelection == "Paper") {
      result = `You lose: ${playerSelection} loses to ${computerSelection}`
   } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
      result = `You win: ${playerSelection} beats ${computerSelection}`
   } else if (playerSelection == "Paper" && computerSelection == "Rock") {
      result = `You win: ${playerSelection} beats ${computerSelection}`
   } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
      result = `You lose: ${playerSelection} loses to ${computerSelection}`
   } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
      result = `You win: ${playerSelection} beats ${computerSelection}`
   } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
      result = `You lose: ${playerSelection} loses to ${computerSelection}`
   }
   return result;
}

console.log(playRound(playerSelection, computerSelection))