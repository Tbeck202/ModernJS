console.log('Connected!');

// SPREAD WORKS ON ANYTHING ITERABLE, LIKE: ARRAYS, STRINGS ETC
const nums = [ 1, 4, 7, 8, 4, 3, 55, 8, 8, 5, 34, 33, 3, 3, 4, 6 ];
// THE THREE DOTS INDICATE SPREAD. EACH ELEMENT OF THE ARRAY IS PASSED IN, ONE AT A TIME
console.log(Math.max(...nums));

const alphabet = [ ...'abcdefghijklmnopqrstuvwxyz' ];

const colors = [ 'red', 'green', 'blue' ];
const oneColor = 'red';

writeColors(...colors);
writeColors(...oneColor);

function writeColors(color1, color2, color3) {
	console.log('Color 1', color1);
	console.log('Color 2', color2);
	console.log('Color 3', color3);
}

//SPREAD CAN BE USED WITH ARRAY LITERALS==================

const cephalopods = [ 'dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish' ];
const gastropods = [ 'giant african snail', 'banana slug', 'variable neon slug' ];
const cnidaria = [ 'fire coral', 'moon jelly' ];

//NEW ARRAY WITH A NEW ELEMENT PLUS TH ELEMENTS FROM TWO OTHER ARRAYS
const mollusca = [ 'garden slug', ...cephalopods, ...gastropods ];

const invertabrates = [ ...cnidaria, ...gastropods, ...cephalopods ];
//WORKS THE SAME AS CONCAT, BUT IS MORE CONCISE ASND IS CLEANER
const invertabrates2 = cephalopods.concat(gastropods).concat(cnidaria);

// SPREAD IS GREAT FOR MAKING COPIES OF ARRAYS
// NEW ARRAY WILL BE STORED IN A NEW PLACE IN MEMORY SO, cepalopods !== cephCopy
const cephCopy = [ ...cephalopods ];

//SPREAD IN OBJECT LITERALS===========================

const feline = {
	legs: 4,
	family: 'Felidae'
};
const canine = {
	family: 'Caninae',
	furry: true,
	legs: 3
};

const dog = {
	...canine,
	isPet: true,
	adorable: true
};
const houseCat = {
	...feline,
	isGrumpy: true,
	personality: 'unpredictable'
};
//ORDER MATTERS!  THE OBJECT CREATED BY SPREADING feline AND canine SHOWS FOUR LEGS,
//EVEN THOUGH THE canine OBJECT ONLY HAS THREE LEGS, BECAUSE IT SETS THE legs PROPERTY
//EQUAL TO THE LAST VALUE
const catDog = {
	...canine,
	...feline
};
// catDog !== catDogClone BECAUSE CatDogClone is saved to a new place in memory
const catDogClone = {
	...catDog
};

// YOU CANNOT SPREAD AN OBJECT LITERAL INTO AN ARRAY.
// YOU CAN ONLY SPREAD INTO ANOTHER OJECT LTERAL
// YOU CAN HOWEVER, SPREAD AN ARRAY INTO AN OBJECT LITERAL

const numbers = [ 1, 2, 3, 4, 5, 6 ];
const oneThruSix = {
	...numbers
};

const random = [ ...'hello', { ...catDog } ];
