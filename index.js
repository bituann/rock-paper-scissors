const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
	let randomIndex = Math.floor(Math.random() * 3);
	console.log(choices[randomIndex]);
}
