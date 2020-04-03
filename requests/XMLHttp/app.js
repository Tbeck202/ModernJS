const firstReq = new XMLHttpRequest();

firstReq.addEventListener('load', function() {
	console.log('First request worked!');
	const data = JSON.parse(this.responseText);
	const filmURL = data.results[0].films[0];
	const filmReq = new XMLHttpRequest();
	filmReq.addEventListener('load', function() {
		console.log('Second request worked!');
		const filmData = JSON.parse(this.responseText);
		console.log(filmData.title);
	});
	filmReq.addEventListener('error', function(e) {
		console.log('Whoopsie doodle!', e);
	});
	filmReq.open('GET', `${filmURL}`);
	filmReq.send();
	// for (let planet of data.results) {
	// 	console.log(planet.name);
	// }
});
firstReq.addEventListener('error', () => {
	console.log('error!');
});
firstReq.open('GET', 'https://swapi.co/api/planets/');
firstReq.send();
console.log('Request Sent!');
