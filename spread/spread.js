console.log('Connected!');

// SPREAD WORK ON ANYTHING ITERABLE, LIKE: ARRAYS, STRINGS ETC
const nums = [ 1, 4, 7, 8, 4, 3, 55, 8, 8, 5, 34, 33, 3, 3, 4, 6 ];
// THE THREE DOTS INDICATE SPREAD. EACH ELEMENT OF THE ARRAY IS PASSED IN, ONE AT A TIME
console.log(Math.max(...nums));

const colors = [ 'red', 'green', 'blue' ];
const oneColor = 'red';

writeColors(...colors);
writeColors(...oneColor);

function writeColors(color1, color2, color3) {
	console.log('Color 1', color1);
	console.log('Color 2', color2);
	console.log('Color 3', color3);
}
