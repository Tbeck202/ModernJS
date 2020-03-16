console.log('connected!');

// reduce() executes a reducer function on each element of an array, resulting in a single value

//  SUM ELEMENTS IN ARRAY USING REDUCE

const reducedArray = [ 3, 5, 7, 9, 11 ].reduce((accumulator, currentValue) => {
	// accumulator is the running total starting with first element in array
	// currentValue start as the secon element in array
	return accumulator + currentValue;
});

const nums = [ 3, 4, 5, 6, 7 ];
const productOfNums = nums.reduce((total, currentValue) => {
	return total * currentValue;
});

// FIND MAX VALUE IN ARRAY
const grades = [ 87, 64, 96, 92, 88, 99, 73, 70, 64 ];

const topGrade = grades.reduce((highGrade, currentValue) => {
	// if (currentValue > highGrade) {
	// 	highGrade = currentValue;
	// }
	// return highGrade;
	return Math.max(highGrade, currentValue);
});

const lowGrade = grades.reduce((lowGrade, currentValue) => {
	return Math.min(lowGrade, currentValue);
});

//set initial value for reduce method
//INITIAL VALUE GOES AFTER THE CALLBACK

const sum = [ 10, 20, 30, 40, 50 ].reduce((total, currVal) => {
	return total + currVal;
}, 1000);

// tally

const votes = [ 'y', 'y', 'n', 'y', 'n', 'did not vote', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'y' ];

const results = votes.reduce((tally, val) => {
	// if (tally[val]) {
	// 	tally[val]++;
	// } else {
	// 	tally[val] = 1;
	// }
	tally[val] = (tally[val] || 0) + 1;
	return tally;
}, {});

const books = [
	{
		title: 'Good Omens',
		authors: [ 'Terry Pratchett', 'Neil Gaiman' ],
		rating: 4.25,
		genres: [ 'fiction', 'fantasy' ]
	},
	{
		title: 'Changing My Mind',
		authors: [ 'Zadie Smith' ],
		rating: 3.85,
		genres: [ 'nonfiction', 'essays' ]
	},
	{
		title: 'Bone: The Complete Edition',
		authors: [ 'Jeff Smith' ],
		rating: 4.42,
		genres: [ 'fiction', 'graphic novel', 'fantasy' ]
	},
	{
		title: 'American Gods',
		authors: [ 'Neil Gaiman' ],
		rating: 4.11,
		genres: [ 'fiction', 'fantasy' ]
	},
	{
		title: 'A Gentleman in Moscow',
		authors: [ 'Amor Towles' ],
		rating: 4.36,
		genres: [ 'fiction', 'historical fiction' ]
	},
	{
		title: 'The Name of the Wind',
		authors: [ 'Patrick Rothfuss' ],
		rating: 4.54,
		genres: [ 'fiction', 'fantasy' ]
	},
	{
		title: 'The Overstory',
		authors: [ 'Richard Powers' ],
		rating: 2.18,
		genres: [ 'fiction', 'garbage' ]
	},
	{
		title: 'A Truly Horrible Book',
		authors: [ 'Xavier Time' ],
		rating: 4.65,
		genres: [ 'fantasy', 'epic' ]
	},
	{
		title: 'The Way of Kings',
		authors: [ 'Brandon Sanderson' ],
		rating: 4.65,
		genres: [ 'fantasy', 'epic' ]
	},
	{
		title: 'Lord of the Flies',
		authors: [ 'William Golding' ],
		rating: 3.67,
		genres: [ 'fiction' ]
	}
];

const sortByRating = books.reduce((group, book) => {
	const key = Math.floor(book.rating); //get rating of book floored to nearest whole number
	if (!group[key]) {
		// if there is no group associated to the key, create a new array for that key
		group[key] = []; //if a group exists for the key, this is skipped
	}
	group[key].push(book); //push book in to appropriate array
	return group;
}, {});
