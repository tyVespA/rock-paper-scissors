function getComputerChoice() {
   let choice = Math.floor(Math.random() * 3);
   let computerSelection;

   switch (choice){
      case 0:
         computerSelection = "Rock";
         break;
      case 1:
         computerSelection = "Paper";
         break;
      case 2:
         computerSelection = "Scissors";
         break;
   }

   return computerSelection;
}

function getPlayerChoice() {
   let playerSelection = prompt("Rock, paper or scissors?", "Rock");
   playerSelection = playerSelection.toLowerCase()
   playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)

   //checks if the player didn't choose any of the options and ends the script if it didn't
   if (playerSelection.toUpperCase() != "ROCK" && playerSelection.toUpperCase() != "PAPER" && playerSelection.toUpperCase() != "SCISSORS") {
      alert ("You didn't choose either of the options")
      return
   }
   return playerSelection
}

computerSelection = getComputerChoice();
playerSelection = getPlayerChoice()


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