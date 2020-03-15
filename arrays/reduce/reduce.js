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
