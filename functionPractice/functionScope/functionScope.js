console.log('Connected!');

let bird = 'Duck';

function birdWatch() {
	let bird = 'Pheasant';
	console.log(bird);
}

console.log(bird);
birdWatch();

if (true) {
	var animal = 'eel';
}

console.log(animal);

// let animals = [ 'Grizzly Bear', 'Panda Bear', 'Spectacled Bear' ];
// for (var i = 0; i < animals.length; i++) {
// 	console.log(i, animals[i]);
// }
// console.log(i);

let animals = [ 'Grizzly Bear', 'Panda Bear', 'Spectacled Bear' ];
let i = 10;
for (let i = 0; i < animals.length; i++) {
	console.log(i, animals[i]);
}
console.log(i);

function doubleArr(arr) {
	const result = [];
	for (let num of arr) {
		let double = num * 2;
		result.push(double);
	}
	return result;
}

//========LEXICAL SCOPE==================

function outer() {
	let movie = 'Amadeus';
	function inner() {
		console.log(movie.toUpperCase());
	}
	inner();
}
