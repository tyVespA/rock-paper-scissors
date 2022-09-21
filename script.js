let playerSelection;
let computerSelection;
let result;

function getComputerChoice() {
   let choice = Math.floor(Math.random() * 3);

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

function playRound(playerSelection, computerSelection) {
   playerSelection = getPlayerChoice()
   computerSelection = getComputerChoice();

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

function game() {
   let computerScore = 0;
   let playerScore = 0;
   
   for (i = 0; i < 5; i++) {
      playRound(playerSelection, computerSelection)
      if (result.charAt(4) == "w") {
         playerScore++
      } else if (result.charAt(4) == "l"){
         computerScore++
      } else {
   
      }
      console.log(result + ". The score is: you " + playerScore + ", computer " + computerScore)
   }
   console.log("THE FINAL SCORE IS: you " + playerScore + ", computer " + computerScore)
   if (playerScore > computerScore) {
      console.log("You won the game")
   } else if (playerScore < computerScore){
      console.log("You lost the game")
   } else {
      console.log("It's a draw")
   }
}

game()
