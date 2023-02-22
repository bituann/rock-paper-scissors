// Since this is a node project for now, we'll require input using node methods
const prompt = require("prompt-sync")();




function game() {
	const choices = ["rock", "paper", "scissors"];
	const winningMatch = {
		rock: "scissors", 
		paper: "rock", 
		scissors: "paper",
     }
	let scores = {
		playerScore: 0,
		computerScore: 0,
		tie: 0
	}

	for (let i = 0; i < 5; i++) {
		console.log(`Round ${i + 1} of 5`)
		let playerChoice = prompt("Rock, paper, or scissors? ")
		let match = oneRound(playerChoice, getComputerChoice());
		console.log(match.message);
		updateScore(match.outcome);
	}

	let gameOutcome = determineWinner(scores)
	let outcomeText = announceOutcome(gameOutcome)
	console.log(outcomeText)
}




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

function updateScore(oneRoundOutcome) {
	switch(oneRoundOutcome) {
		case "draw":
			draw++
			break
		case "win":
			playerScore++
			break
		case "loss":
			computerScore++
			break
	}
}
