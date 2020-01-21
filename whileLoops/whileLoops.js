console.log('Connected!');

// let j = 0;
// while (j <= 5) {
// 	console.log(j);
// 	j++;
// }

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while (guess !== target) {
	console.log(`Target: ${target} - Guess: ${guess}`);
	guess = Math.floor(Math.random() * 10);
}
console.log("It's a match!");
console.log(`Target: ${target} - Guess: ${guess}`);

console.log('----------------------');

const target2 = Math.floor(Math.random() * 10);
let guess2 = Math.floor(Math.random() * 10);

while (true) {
	if (target2 === guess2) break;
	console.log(`Target: ${target2} - Guess: ${guess2}`);
	guess = Math.floor(Math.random() * 10);
}
console.log("It's a match!");
console.log(`Target: ${target2} - Guess: ${guess2}`);
