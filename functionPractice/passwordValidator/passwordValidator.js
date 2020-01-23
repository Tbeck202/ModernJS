console.log('Connected!');

function validatePassword(username, password) {
	if (password.length < 8 || password.includes(username) || password.includes(' ')) {
		return false;
	}
	return true;
}

function isValidPw(username, password) {
	const checkLength = password.length < 8;
	const hasSpace = password.indexOf(' ') !== -1;
	const containsUsername = password.indexOf(username) !== -1;
	return !checkLength && !hasSpace && !containsUsername; // this line evaluates to true or false
}
