console.log('Connected!');

//DEFAULT PARAMETERS MUST BE DECLARED AT THE END
function multiply(x, y = 1) {
	return x * y;
}

const greet = (person, greeting = 'hi') => {
	console.log(`${greeting}, ${person}!`);
};

const blah = (x, y = [ 1, 2, 3 ]) => {
	console.log(x, y);
};

const goodBoy = (dog, description = 'good boy!') => {
	console.log(`${dog} is a ${description}!`);
};

const calculate = (squareFeet, costPerThousand = 75) => {
	return squareFeet / 1000 * costPerThousand;
};
