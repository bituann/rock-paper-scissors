// Since this is a node project for now, we'll require input using node methods
const prompt = require("prompt-sync")();

const choices = ["rock", "paper", "scissors"];
const winningMatch = {
	rock: "scissors",
	paper: "rock",
	scissors: "paper",
};

function getComputerChoice() {
	let randomIndex = Math.floor(Math.random() * 3);
	return choices[randomIndex];
}

function oneRound(playerChoice, computerChoice) {
	if (computerChoice === playerChoice) {
		return "It's a tie";
	} else if (computerChoice === winningMatch[playerChoice]) {
		return `You win! ${playerChoice} beats ${computerChoice}`;
	} else {
		return `You lose! ${computerChoice} beats ${playerChoice}`;
	}
}
console.log(getComputerChoice());
console.log(oneRound(getComputerChoice()));
