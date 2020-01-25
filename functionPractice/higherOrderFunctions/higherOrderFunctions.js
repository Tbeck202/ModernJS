console.log('Conected!');

function add(x, y) {
	return x + y;
}

const subtract = function(x, y) {
	return x - y;
};

function multiply(x, y) {
	return x * y;
}

const divide = function(x, y) {
	return x / y;
};

const operations = [ add, subtract, multiply, divide ];

for (let func of operations) {
	let result = func(30, 5);
	console.log('Operation result: ', result);
}

const thing = {
	doSomething: multiply
};

console.log('Thing result: ', thing.doSomething(50, 2));

//=======FUNCTIONS THAT ACCEPT ANOTHER FUNCTION AS AN ARGUMENT===================

function callThreeTimes(f) {
	f();
	f();
	f();
}

function cry() {
	console.log("Boo Hoo!!! I'm sad :(");
}
function rage() {
	console.log('I hate everything!!!');
}

function repeatNTimes(action, num) {
	for (let i = 0; i < num; i++) {
		action();
	}
}

function pickOne(f1, f2) {
	let rand = Math.random();
	console.log(rand);
	if (rand < 0.5) {
		f1();
	} else {
		f2();
	}
}

//=======FUNCTIONS THAT RETURN ANOTHER FUNCTION AS AN RETURN VALUE===================

function multiplyBy(num) {
	return function(x) {
		return x * num;
	};
}

const triple = multiplyBy(3);
const double = multiplyBy(2);
const halve = multiplyBy(0.5);
