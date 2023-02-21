// Since this is a node project for now, we'll require input using node methods
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

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
