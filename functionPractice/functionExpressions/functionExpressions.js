console.log('Connected!');

// THE ADD AND SUM FUNCTIONS ARE IDENTICAL. JUST DECLARED IN DIFFERENT WAYS
function add(x, y) {
	return x + y;
}

const sum = function(x, y) {
	return x + y;
};

const product = function multiply(x, y) {
	// THE NAME "MULTIPY" IS OPTIONAL. THE FUNCTION BEHAVES THE SAME WAY WHETHER YOU NAME IT OR NOT
	// YOU STILL CALL THE FUNCTION USING PRODUCT()
	return x * y;
};
