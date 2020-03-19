console.log('connected');

//LOOKS LIKE SPREAD BECAUSE IT USES THE ... SYNTAX

//BEFORE REST, THE arguments METHOD WAS USED TO WRITE FUNCTIONS WITH UNKNOWN NUMBER OF AGRUMENTS
//arguments METHOD CANNOT BE USED WITH ARROW FUNCTIONS
function sumAll() {
	let total = 0;
	for (let i = 0; i < arguments.length; i++) {
		total += arguments[i];
	}
	return total;
}
//SAME THING, USING REDUCE
function sumReduce() {
	//arguments IS NOT AN ARRAY, SO WE HAVE TO USE SPREAD TO MAKE IT INTO AN ARRAY
	const argArray = [ ...arguments ];
	return argArray.reduce((total, currVal) => {
		return total + currVal;
	});
}

//USING REST PARAMETERS YOU USE ... IN YOUR PARAMETER DEFINITIONS
//ANY PASSED IN ARGUMENTS WILL BE TURNED IN TO AN ACTUAL ARRAY

function sum(...nums) {
	//AN ARRAY CALLED NUMS WILL BE CREATED WITH THE ARGUMENTS PASSED IN
	return nums.reduce((total, currVal) => {
		return total + currVal;
	});
}

//ALSO USED TO COLLECT ANY REMAINING ARGUMENTS
function fullName(first, last, ...titles) {
	//	REST PARAMETERS MUST BE THE LAST PARAMETER
	console.log(first);
	console.log(last);
	console.log(titles);
}

//REST PARAMETERS CAN BE USED IN ARROW FUNCTIONS
const multiply = (...nums) => nums.reduce((total, currVal) => total * currVal);
