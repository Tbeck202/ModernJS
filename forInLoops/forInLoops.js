console.log('Connected!!!');

// For in loops are used for objects
const jeopardyWinnings = {
	regularPlay: 2522700,
	watsonChallenge: 300000,
	tournamentOfChampions: 500000,
	battleOfTheDecades: 100000
};

for (let prop in jeopardyWinnings) {
	console.log(prop);
	console.log(jeopardyWinnings[prop]);
}

let total = 0;
for (let prop in jeopardyWinnings) {
	total += jeopardyWinnings[prop];
}
console.log(`Total Jeopardy winnings: ${total}`);

for (let k in [ 88, 99, 77, 66 ]) {
	// for in works with arrays, but is not good practice
	console.log(k);
}
