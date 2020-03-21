console.log('Connected');

const getStats = (arr) => {
	const min = Math.min(...arr);
	const max = Math.max(...arr);
	const sum = arr.reduce((sum, currVal) => sum + currVal);
	const avg = Math.round(sum / arr.length * 100) / 100;
	return {
		min,
		max,
		sum,
		avg
	};
};

const reviews = [ 3.5, 4.8, 2.9, 4.2, 3.3, 3, 4, 5, 4.8 ];
