
//getComputerChoice function
//randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

function getComputerChoice(){
  let choices = ['Rock', 'Paper', 'Scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

//