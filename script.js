const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random()*3);
    if (randomNumber === 0){
    return("Rock");
}
    else if(randomNumber === 1){
    return ("Paper");
}
    else if (randomNumber === 2){
    return ("Scissors");
}
}
    console.log(getComputerChoice());

function playRound(playerSelection, computerSelection){
if (playerSelection == "rock")
if (computerSelection == "Rock"){
    return("It's a tie!")
}
else if (computerSelection == "Scissors"){
    return("Rock beats Scissors, You won!")
}
else if (computerSection == "Paper"){
    return("Paper beats Rock, You lose :(")
}
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();