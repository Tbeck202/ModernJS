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

function average(nums) {
	let sum = 0;
	for (let i = 0; i <= nums.length; i++) {
		sum += nums[i];
	}
	console.log(sum);
}
