console.log('Connected!');
const square = (x) => {
	return x * x;
};

const isEven = (num) => {
	return num % 2 === 0;
};

const multiply = (x, y) => {
	return x * y;
};

const greet = () => {
	console.log('HI!');
};

//=====IMPLICIT RETURNS=======

const squared = (n) => n * n;

const nums = [ 1, 2, 3, 4, 5, 6, 7, 8 ];

const double = nums.map((n) => n * 2);

const parityList = nums.map((n) => (n % 2 === 0 ? 'even' : 'odd'));
