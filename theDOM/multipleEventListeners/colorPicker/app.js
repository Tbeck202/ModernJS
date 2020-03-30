const colors = [ 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet' ];
const changeColor = function(evt) {
	document.body.style.backgroundColor = this.style.backgroundColor;
	console.log(evt);
};
const container = document.querySelector('#boxes');

for (let color of colors) {
	const box = document.createElement('div');
	box.style.backgroundColor = color;
	box.classList.add('box');
	container.appendChild(box);
	box.addEventListener('click', changeColor);
}

document.body.addEventListener('keypress', function(evt) {
	console.log(evt.key);
});
