console.log('Connected!');

function grumpus() {
	console.log('You again??');
	console.log('For the last time....');
	console.log('Leave me alone!!!!');
}
grumpus();

function rollDie() {
	let roll = Math.floor(Math.random() * 6) + 1;
	console.log(`You rolled: ${roll}!`);
}

function throwDice() {
	for (let i = 1; i <= 6; i++) {
		rollDie();
	}
}
