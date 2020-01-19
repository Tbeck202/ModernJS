console.log('Connected!');

const fitBitData = {
	totalSteps: 308727,
	totalMiles: 211.7,
	avgCalorieBurn: 5755,
	workoutsThisWeek: '5 of 7',
	avgGoodSleep: '2:13',
	45: 'forty five' // access with square bracket notation
};

let data = { a: 1, b: 2, c: 3 };

const numbers = {
	100: 'one hundred', // accessed with square bracket notation: numbers[100]
	16: 'sixteen',
	'76 trombones': 'Great song!' //numbers['76 trombones']
};

const palette = {
	red: '#eb4d4b',
	yellow: '#f9ca24',
	blue: '#30336b'
};

let mysteryColor = 'yellow'; // use bracket notation for accesing objects with a varible: palette[mysteryColor] = #f9ca24

const userReviews = {};
//adding object data
userReviews['queenBee49'] = 4.0;
userReviews.mrSmith78 = 3.5;
console.log(userReviews);
//updating object data
userReviews.mrSmith78++;
userReviews['queenBee49'] += 0.5;
console.log(userReviews);

const student = {
	firstName: 'David',
	lastName: 'Jones',
	strengths: [ 'music', 'art' ],
	exams: {
		midterm: 92,
		final: 88
	}
};

const avg = (student.exams.midterm + student.exams.final) / 2;
console.log('Your test average is: ' + avg);

const shoppingCart = [
	{
		product: 'Jenga Classic',
		price: 6.88,
		quantity: 1
	},
	{
		product: 'Echo Dot',
		price: 29.99,
		quantity: 3
	},
	{
		product: 'Fire Stick',
		price: 39.99,
		quantity: 2
	}
];

const game = {
	player1: {
		userName: 'lua',
		playingAs: 'x'
	},
	player2: {
		userName: 'jasper',
		playingAs: '0'
	},
	board: [ [ 'o', null, 'x' ], [ 'x', 'o', 'x' ], [ null, 'o', 'x' ] ]
};
