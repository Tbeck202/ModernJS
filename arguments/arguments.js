console.log('Connected!!');

function greet(name) {
	console.log(`Hi ${name}!`);
}

function rollDie() {
	let roll = Math.floor(Math.random() * 6) + 1;
	console.log(`Rolled: ${roll}`);
}

function throwDice(numRolls) {
	for (let i = 0; i < numRolls; i++) {
		rollDie();
	}
}

function square(num) {
	console.log(`Your number squared = ${num * num}`);
}

function sum(x, y) {
	return x + y;
	//console.log(x + y);
}

function divide(a, b) {
	console.log(a / b);
}

// function isPurple(color) {
// 	if (color.toLowerCase() === 'purple') {
// 		return true;
// 	}
// 	return false;
// }

function isPurple(color) {
	return color.toLowerCase() === 'purple';
}

function containsPurple(arr) {
	for (let color of arr) {
		if (color === 'purple' || color === 'magenta') {
			return true;
		}
	}
	return false;
}
