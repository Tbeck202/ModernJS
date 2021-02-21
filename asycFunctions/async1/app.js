async function greet() {
	return 'hello';
}

// async function add(x, y){
//     return x + y
// }

async function add(x, y) {
	if (typeof x !== 'number' || typeof y !== 'number') {
		return 'your numbers must be numbers';
	}
	return x + y;
}
