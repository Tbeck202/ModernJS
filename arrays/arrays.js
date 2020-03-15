console.log('connected!');

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
		rating: 4.19,
		genres: [ 'fiction', 'short stories' ]
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

//let shoppingList = [ 'cereal', 'cheese', 'ice' ];
let lotto = [ 45, 10, 27, 23, 2 ];
let myCollection = [ 12, 'dog', true, null, NaN ];

//let colors = [ 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet' ];
//console.log(colors.length, colors[3], colors[colors.length - 1]);

let shoppingList = [ 'Cheddar Cheese', '2% Milk' ];
shoppingList[1] = 'Whole Milk';
shoppingList[shoppingList.length] = 'Ice Cream';

//PUSH AND POP==============================
//PUSH adds data to the end of an array. POP pulls data from the end of an array (that data no longer exists in the original array)

let topSongs = [ 'First Time Ever I Saw Your Face', 'God Only Knows', 'A Day In The Life', 'Life on Mars' ];

topSongs.push('Fortunate Son');
console.log(topSongs);

//SHIFT AND UNSHIFT==============================
//SHIFT REMOVES THE DATA FROM THE ZERO INDEX AND PUSHES THE REST OF THE DATA TO THE INDEX TO THE LEFT
//UNSHIFT PUTS DATA INTO ZERO INDEX OF ARRAY AND PUSHES THE REST OF THE DATA TO THE INDEX TO THE RIGHT
//UNSHIFT CAN TAKE MULTIPLE ARGUMENTS - array.unshift(data, moreData, evenMoreData)

let dishesToDo = [ 'Big Platter' ];

dishesToDo.unshift('Plate');
console.log(dishesToDo);
dishesToDo.unshift('Cup');
console.log(dishesToDo);
dishesToDo.unshift('Spoon');
console.log(dishesToDo);

let dish = dishesToDo.shift([ 0 ]);
console.log(dish);
console.log(dishesToDo);

// concat() combines arrays==============================
let fruits = [ 'apple', 'banana' ];
let veggies = [ 'asparagus', 'carrots' ];
let meats = [ 'steak', 'chicken' ];
let allFoods = fruits.concat(veggies, meats);
console.log(fruits.concat(veggies));
console.log(veggies.concat(fruits));
console.log(allFoods);

// includes() LOOKS FOR PASSED IN VALUE AND RETURNS TRUE OR FALSE==============================
let ingredients = [ 'water', 'corn starch', 'flour', 'cheese', 'brown sugar', 'shrimp', 'eel', 'butter' ];
console.log(ingredients.includes('fish'));
console.log(ingredients.includes('shrimp'));
console.log(ingredients.includes('corn')); //RETURNS FALSE BECAUSE IT LOOKS FOR AN EXACT MATCH
console.log(ingredients.includes('water', 3)); // SECOND VALUE PASSED IS INDEX AT WHICH THE SEARCH BEGINS, IN THIS CASE AT THE THIRD INDEX

if (ingredients.includes('flour')) {
	console.log("I AM GLUTEN FREE! I CAN'T EAT THAT!");
}

//indexOf() LOOKS FOR PASSED IN VALUE AND RETURNS THE INDEX OF THE DATA MATCH. -1 IS RETURNED IF THERE IS NO MATCH==============================
console.log(ingredients.indexOf('eel'));
console.log(ingredients.indexOf('maple syrup'));
console.log(ingredients.indexOf('cheese', 5)); //CAN ALSO PASS IN A NUMBER FOR THE INDEX AT WHICH TO START YOUR SEARCH

//reverse() REVERSES ORDER OF ARRAY. ORIGINAL ARRAY IS CHANGED!!!==============================
let letters = [ 't', 'c', 'e', 'p', 's', 'e', 'r' ];
console.log(letters.reverse());

//join() CONCATENATES ALL DATA IN ARRAY INTO A SINGLE STRING.  ALL NON-STRING DATA IS TURNED INTO A STRING==============================
console.log(letters.join());
console.log(letters.join('.')); //DEFAULT SEPERATOR IS A COMMA BUT CAN BE CHANGED
console.log(letters.join('-'));
console.log(letters.join('')); //SERPERATOR CAN BE REMOVED ALL TOGETHER

// slice() COPIES A SPECIFIED SECTION OF AN ARRAY INTO A NEW ARRAY==============================
// IF NO VALUE PASSED IN, A COPY OF THE ENTIRE ARRAY WILL BE MADE. ORIGINAL IS UNAFFECTED
let animals = [ 'shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise' ];
let swimmers = animals.slice(0, 3); // SECOND NUMBER IS WHERE THE SLICE STOPS. DATA AT THAT INDEX IS NOT INCLUDED!
console.log(swimmers);
let mammals = animals.slice(2, 4);
console.log(mammals);
let reptiles = animals.slice(4); // IF NO SECOND VALUE PASSED IN, SLICE WILL GO UNTIL THE END OF THE ARRAY
console.log(reptiles);
let quadruped = animals.slice(-3);
console.log(quadruped); // NEAGATIVE NUMBER WILL MAKE SLICE START AT END OF ARRAY AND WORK BACK THE NUMBER OF INDICIES SPECIFIED. IN THIS CASE, THREE SPACES.
let copy = animals.slice();
console.log(copy);

// splice() REMOVES OR REPLACES CONTENTS OF AN ARRAY.  ALLOWS YOU TO INSERT DATA TO SPECIFIED POINT IN ARRAY========================================
//splice(startIdx, deleteCount, itemsToInsert) - FIRST VALUE: INDEX TO INSERT AT - SECOND VALUE: HOW MUCH (IF ANY) TO DELETE - THIRD VALUE: WHAT TO INSERT
animals.splice(1, 0, 'octopus');
console.log(animals);
console.log(animals.splice(3, 2)); //IF NO THIRD VALUE, DATA WILL JUST BE DELETED AND VALUES REMOVED WILL BE RETURNED
animals.splice(3, 0, 'snake', 'frog'); //MULTIPLE VALUES CAN BE PASSED IN
console.log(animals);
animals.splice(0, 2, 'SHARK!!!', 'OCTOPUS!!');
console.log(animals);

// sort()  SORTS ELEMENTS OF AN ARRAY IN PLACE AND RETURNS THE SORTED ARRAY==========================================
//ALL VALUES ARE CONVERTED TO STRING AND SORTED ALPHABETICALLY (BASED ON UTF-16 VALUES)
let people = [ 'Mrs. Robinson', 'Angie', 'Jolene', 'Maggie May', 'Roxanne' ];
console.log(people.sort());

let nums = [ 34, 10, 100000, 67, 99 ];
console.log(nums.sort());

const prices = [ 400.5, 3000, 99.99, 35.99, 12.0, 9500 ];

//arr.sort(campareFuction(a,b)) used to compare numbers
const smallToLarge = prices.slice().sort((a, b) => a - b); //slice method makes new array
const largeToSmall = prices.slice().sort((a, b) => b - a);

const booksLowToHigh = books.slice().sort((a, b) => a.rating - b.rating);
const booksHighToLow = books.slice().sort((a, b) => b.rating - a.rating);

// find() returns value of the first element in the array that satisfies the provided testing function==============================
// THE FUNCTION STOPS ONCE IT FINDS THE FIRST INSTANCE

let movies = [ 'The Fantastic Mr. Fox', 'Mr. and Mrs. Smith', 'Mrs. Doubtfire', 'Mr. Deeds' ];

const movie = movies.find((movie) => {
	return movie.includes('Mrs');
}); //return first movie that includes with a given value

const movie2 = movies.find((m) => m.indexOf('Mrs') === 0); //return first movie that starts with a given value

const goodBook = books.find((b) => b.rating >= 4.3); //Find first book rated more than 4.3
const neilBook = books.find((b) => b.authors.includes('Neil Gaiman')); //Find first book by Neil Gaiman

//filter() creates a new array with all elements that pass the test implemented by the provided function====================================

const filterNums = [ 34, 35, 67, 54, 109, 102, 32, 9 ];

const odds = filterNums.filter((n) => n % 2 === 1);
const evens = filterNums.filter((n) => n % 2 === 0);
const bigNums = filterNums.filter((n) => n > 50);
const smallNums = filterNums.filter((n) => n < 40);

const goodBooks = books.filter((b) => b.rating > 4.3);
const fantasyBooks = books.filter((b) => b.genres.includes('fantasy'));
const shortFormBooks = books.filter((b) => b.genres.includes('essays') || b.genres.includes('short stories'));

const query = 'The';
const results = books.filter((b) => {
	const title = b.title.toLowerCase();
	return title.includes(query.toLowerCase());
});

// every() tests whether or not ALL element in an array pass the provided function.  returns boolean true or false==========================

const words = [ 'dog', 'dig', 'log', 'bag', 'wag' ];

const wordsHave3Letters = words.every((word) => word.length === 3); //true
const endWithG = words.every((word) => {
	return word[word.length - 1] === 'g';
});

const allHaveAnO = words.every((word) => {
	return word.includes('o');
});

const everyBookRatingOver3 = books.every((book) => {
	return book.rating > 3;
});

const everyBookRatingOver4 = books.every((book) => {
	return book.rating > 4;
});

// some() tests whether or not ANY element in an array passes the provided function.  returns boolean true or false==========================

const wordsWithD = words.some((word) => word.toLowerCase().includes('d')); //True
const wordsWithF = words.some((word) => word.toLowerCase().includes('f')); //False
const someStartWithD = words.some((word) => word[0].toLowerCase() === 'd'); //true
const someStartWithF = words.some((word) => word[0].toLowerCase() === 'f'); //false

const someBookRatingOver4 = books.some((book) => {
	return book.rating > 4;
}); // true
const someBookRatingUnder3 = books.some((book) => {
	return book.rating < 3;
}); //false
