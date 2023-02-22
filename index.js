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
		return {outcome: "draw", message: "It's a tie"};
	} else if (computerChoice === winningMatch[playerChoice]) {
		return {
			outcome: "win",
			message: `You win! ${playerChoice} beats ${computerChoice}`;
		}
	} else {
		return {
			outcome: "loss", 
			message: `You lose! ${computerChoice} beats ${playerChoice}`;
		}
	}
}

function keepScore(oneRoundOutcome) {
	switch(oneRoundOutcome) {
		case "draw":
			break
		case "win":
			playerScore++
		case "loss":
			computerScore++
	}
}
