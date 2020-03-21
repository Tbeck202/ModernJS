console.log('Connected!');

const role = 'Host';
const person = 'Jools Holland';
const role2 = 'Director';
const person2 = 'James Cameron';

//USE SQUARE BRACKETS TO SET THE KEY DYNAMICALLY
const team = {
	[role]: person,
	[role2]: person2
};

//add properties to object
const addProp = (obj, key, value) => {
	return {
		//USE SPREAD TO COPY VALUES FROM OBJ
		...obj,
		//SET KEY DYNAMICALLY
		[key]: value
	};
};

const teamDescription = addProp(team, 'Morale', 'Happy');
