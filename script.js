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

console.log(getComputerChoice())