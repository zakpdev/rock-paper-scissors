//declarations
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
let result;

//getComputerChoice function
//randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
function getComputerChoice(){
  let choices = ['Rock', 'Paper', 'Scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

//playRound function
//accepts playerSelection and computerSelection and plays a single round of Rock, Paper, Scissors returning the results in a string
function playRound(playerSelection, computerSelection) {
  
  playerSelection = playerSelection.toLowerCase(); //satisfies requirement that the parameter be case-insensitive
  computerSelection = computerSelection.toLowerCase();
  
  if (playerSelection == 'rock') {
    if (computerSelection == 'rock') {
      return 'Tie Game! You both chose Rock';
    }
    else if (computerSelection == 'paper') {
      return 'You Lose! Paper beats Rock';
    }
    else {
      return 'You Win! Rock beats Scissors';
    }
  }
  else if (playerSelection == 'paper') {
    if (computerSelection == 'rock') {
      return 'You Win! Paper beats Rock';
    }
    else if (computerSelection == 'paper') {
      return 'Tie Game! You both chose Paper';
    }
    else {
      return 'You Lose! Scissors beat Paper';
    }
  }
  else {
    if (computerSelection == 'rock') {
      return 'You Lose! Rock beats Scissors';
    }
    else if (computerSelection == 'paper') {
      return 'You Win! Scissors beat Paper';
    }
    else {
      return 'Tie Game! You both chose Scissors';
    }
  }
  
}

//target score containers
const player = document.getElementById("playerScore");
const computer = document.getElementById("computerScore");
const gameResult = document.getElementById("results");

//initialize scores
player.innerHTML = playerScore;
computer.innerHTML = computerScore;

//target the buttons
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const test = document.getElementById("test");


//play a game with playerSelection tied to the corresponding button + update scores
rock.addEventListener('click', function(){
  result = playRound(rock.textContent, getComputerChoice());
  
  if (result.includes('Win')) {
    playerScore++;
  }
  else if (result.includes('Lose')) {
    computerScore++;
  }  
  
  roundsPlayed++;
  
  gameResult.innerHTML = result;
  player.innerHTML = playerScore;
  computer.innerHTML = computerScore;

  if(roundsPlayed == 5){
    rock.remove();
    paper.remove();
    scissors.remove();
  };

});

paper.addEventListener('click', function(){
  result = playRound(paper.textContent, getComputerChoice());
  
  if (result.includes('Win')){
    playerScore++;
  }
  else if (result.includes('Lose')){
    computerScore++;
  }
  
  roundsPlayed++;
  
  gameResult.innerHTML = result;
  player.innerHTML = playerScore;
  computer.innerHTML = computerScore;

  if(roundsPlayed == 5){
    rock.remove();
    paper.remove();
    scissors.remove();
  };
});

scissors.addEventListener('click', function(){
  result = playRound(scissors.textContent, getComputerChoice());
  
  if (result.includes('Win')){
    playerScore++;
  }
  else if (result.includes('Lose')){
    computerScore++;
  }
  
  roundsPlayed++;
  
  gameResult.innerHTML = result;
  player.innerHTML = playerScore;
  computer.innerHTML = computerScore;

  if(roundsPlayed == 5){
    rock.remove();
    paper.remove();
    scissors.remove();
  };
});




/* //game function

function game () {
  
  let playerScore = 0;
  let computerScore = 0;
  let result;

  //main game loop
  for (let i = 1; i <= 5 ; i++) {
    result = playRound(prompt('Rock, Paper or Scissors?'), getComputerChoice())
    console.log(result);
    if (result.includes('Win')) {
      playerScore++;
    }
    else if (result.includes('Lose')) {
      computerScore++;
    }  
  }
  
  //show user game results
  if (playerScore == computerScore) {
    console.log('The score is ' + playerScore + ' to ' + computerScore + '. Tie Game!');
  }
  else if (playerScore > computerScore) {
    console.log('The score is ' + playerScore + ' to ' + computerScore + '. You Win!');
  }
  else {
    console.log('The score is ' + playerScore + ' to ' + computerScore + '. You Lose!');
  }
} */
