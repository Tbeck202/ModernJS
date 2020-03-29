const btn = document.querySelector('button');

btn.addEventListener('mouseover', () => {
	btn.innerText = "Seriously, don't click me!!!!";
});
btn.addEventListener('mouseout', () => {
	btn.innerText = "Don't click me!";
});
btn.addEventListener('click', () => {
	alert('I TOLD YOU NOT TO CLICK ME!!!!!');
});
window.addEventListener('scroll', () => {
	console.log('Stop scrolling!');
});
