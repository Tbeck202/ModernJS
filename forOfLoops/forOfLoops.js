console.log('Connected!');

let subReddits = [ 'soccer', 'nba', 'cringe', 'books' ];

for (let i = 0; i < subReddits.length; i++) {
	console.log(subReddits[i]);
}

for (let sub of subReddits) {
	console.log(sub);
}

// for (let char of 'cockadoodledoo') {
// 	console.log(char.toUpperCase());
// }

const magicSquare = [ [ 2, 7, 6 ], [ 9, 5, 1 ], [ 4, 3, 8 ] ];

for (let i = 0; i < magicSquare.length; i++) {
	let row = magicSquare[i];
	let sum = 0;
	for (j = 0; j < row.length; j++) {
		sum += row[j];
	}
	console.log(`${row} summed to: ${sum} with a for loop`);
}

for (let row of magicSquare) {
	let sum = 0;
	for (let num of row) {
		sum += num;
	}
	console.log(`${row} summed to: ${sum} with a for...of loop`);
}

const words1 = [ 'mail', 'milk', 'bath', 'black' ];
const words2 = [ 'box', 'shake', 'tub', 'berry' ];

for (let i = 0; i < words1.length; i++) {
	// for of loop would not be ideal for this code
	console.log(`${words1[i]}${words2[i]}`);
}

const movieReviews = {
	Arrival: 9.5,
	Alien: 9,
	Amelie: 8,
	'Inn Bruges': 9,
	Amadeus: 10,
	'Kill Bill': 8,
	'Little Miss Sunshine': 8.5,
	Coraline: 7.5
};

for (let movie of Object.keys(movieReviews)) {
	console.log(movie, movieReviews[movie]);
}

const ratings = Object.values(movieReviews);
let total = 0;

for (let rating of ratings) {
	total += rating;
}

let avg = total / ratings.length;
console.log(`average rating: ${avg}`);
