const input = document.querySelector('#username');
const addItemInput = document.querySelector('#addItem');
const itemsUl = document.querySelector('#items');

input.addEventListener('keydown', function(e) {
	console.log('Key Down!');
});

input.addEventListener('keyup', function(e) {
	console.log('Key Up!');
});

input.addEventListener('keypress', function(e) {
	console.log('Key Press!');
});

addItemInput.addEventListener('keypress', function(e) {
	if (e.key === 'Enter') {
		if (!this.value) return;
		const newLi = document.createElement('li');
		newLi.innerText = this.value;
		itemsUl.appendChild(newLi);
		this.value = '';
	}
});
