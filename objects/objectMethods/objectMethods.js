console.log('connected');

const math = {
	add: function(x, y) {
		return x + y;
	},
	subtract: function(x, y) {
		return x - y;
	},
	multiply: function(x, y) {
		return x * y;
	},
	divide: function(x, y) {
		return x / y;
	}
};

//METHOD SHORTHAND================
const auth = {
	login(user) {
		console.log(`${user} is logged in!`);
	},
	logout() {
		console.log('BYE BYE!');
	}
};
