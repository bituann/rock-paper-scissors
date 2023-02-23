// Since this is a node project for now, we'll require input using node methods
const prompt = require("prompt-sync")();

function game() {
	const choices = ["rock", "paper", "scissors"];
	const winningMatch = {
		rock: "scissors",
		paper: "rock",
		scissors: "paper",
	};
	let scores = {
		playerScore: 0,
		computerScore: 0,
		tie: 0,
	};

	console.log("Type 'exit' to cancel");

	for (let i = 0; i < 5; i++) {
		console.log(`Round ${i + 1} of 5`);
		let playerChoice = prompt("Rock, paper, or scissors? ").toLowerCase();

		if (playerChoice === "exit") return;

		//Input validation
		while (!choices.includes(playerChoice) || playerChoice !== "exit") {
			if (playerChoice === "exit") return;

			console.log("That's not a valid choice \n");
			console.log(`Round ${i + 1} of 5`);
			playerChoice = prompt("Rock, paper, or scissors? ").toLowerCase();
		}

		let match = oneRound(
			playerChoice,
			getComputerChoice(choices),
			winningMatch
		);
		console.log(match.message);
		updateScore(match.outcome, scores);
	}

	let gameOutcome = determineWinner(scores);
	let outcomeText = announceOutcome(gameOutcome);
	console.log(outcomeText);
}

function getComputerChoice(options) {
	let randomIndex = Math.floor(Math.random() * 3);
	return options[randomIndex];
}

function oneRound(playerChoice, computerChoice, winCombination) {
	if (computerChoice === playerChoice) {
		return { outcome: "draw", message: "It's a tie" };
	} else if (computerChoice === winCombination[playerChoice]) {
		return {
			outcome: "win",
			message: `You win! ${playerChoice} beats ${computerChoice}`,
		};
	} else {
		return {
			outcome: "loss",
			message: `You lose! ${computerChoice} beats ${playerChoice}`,
		};
	}
}

function updateScore(oneRoundOutcome, scores) {
	switch (oneRoundOutcome) {
		case "draw":
			scores.tie++;
			break;
		case "win":
			scores.playerScore++;
			break;
		case "loss":
			scores.computerScore++;
			break;
	}
}

function determineWinner(score) {
	if (score.playerScore === score.computerScore) return "tie";
	if (score.playerScore > score.computerScore) return "player";
	if (score.playerScore < score.computerScore) return "computer";
}

function announceOutcome(outcome) {
	switch (outcome) {
		case "tie":
			return "Evenly Matched! It's a tie.";
		case "player":
			return "Congratulations! You won!";
		case "computer":
			return "Too bad, you lost";
	}
}

game();
