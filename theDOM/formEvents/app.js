const form = document.querySelector('#signup-form');
const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');

form.addEventListener('submit', function(e) {
	console.log('Form Submitted!');
	console.log('cc ', creditCardInput.value);
	console.log('terms ', termsCheckbox.checked);
	console.log('veggie select ', veggieSelect.value);
	e.preventDefault();
});

const formData = {};
for (let input of [ creditCardInput, termsCheckbox, veggieSelect ]) {
	input.addEventListener('input', ({ target }) => {
		const { name, type, value, checked } = target;
		formData[name] = type === 'checkbox' ? checked : value;
		console.log(formData);
	});
}

// creditCardInput.addEventListener('input', (e) => {
// 	console.log('CC info changed', e);
// 	formData['cc'] = e.target.value;
// });

// veggieSelect.addEventListener('input', (e) => {
// 	console.log('Veggie changed!', e);
// 	formData['veggie'] = e.target.value;
// });

// termsCheckbox.addEventListener('input', (e) => {
// 	console.log('Checkbox!', e);
// 	formData['agreeToTerms'] = e.target.checked;
// });
