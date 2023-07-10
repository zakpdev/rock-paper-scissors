
//getComputerChoice function
//randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

function getComputerChoice(){
  let choices = ['Rock', 'Paper', 'Scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

/*
Write a function that plays a single round of Rock Paper Scissors. 

The function should take two parameters - the playerSelection and computerSelection - 

and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
*/

//playRoung function
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