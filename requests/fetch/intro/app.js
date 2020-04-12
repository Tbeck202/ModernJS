const prom = fetch('http://www.omdbapi.com/?s=report&apikey=160f3de3').then((response) => {
	response.json().then((data) => {
		console.log(data);
		for (let movie of data.Search) {
			console.log(movie.Title);
		}
	});
});
