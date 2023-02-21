const choices = ["rock", "paper", "scissors"];
const winningMatch = {
	rock: "scissors",
	paper: "rock",
	scissors: "paper",
};

function getComputerChoice() {
	let randomIndex = Math.floor(Math.random() * 3);
	console.log(choices[randomIndex]);
}
