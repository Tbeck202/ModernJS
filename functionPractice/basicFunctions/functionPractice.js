console.log('Connected!');

function validatePassword(username, password) {
	if (password.length < 8 || password.includes(username) || password.includes(' ')) {
		return false;
	}
	return true;
}

function isValidPw(username, password) {
	const checkLength = password.length < 8;
	const hasSpace = password.indexOf(' ') !== -1;
	const containsUsername = password.indexOf(username) !== -1;
	return !checkLength && !hasSpace && !containsUsername; // this line evaluates to true or false
}

function average(nums) {
	let sum = 0;
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
	}
	return (avg = sum / nums.length);
}

function isPangram(sentence) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';

	let check = sentence.toLowerCase();
	for (let letter of alphabet) {
		if (!check.includes(letter)) {
			return false;
		}
	}
	return true;
}

function pick(arr) {
	const idx = Math.floor(Math.random() * arr.length);
	return arr[idx];
}

function getCard() {
	const values = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ];
	const suits = [ 'clubs', 'spades', 'hearts', 'diamonds' ];

	return { value: pick(values), suit: pick(suits) };
}
