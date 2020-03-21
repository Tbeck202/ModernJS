console.log('connected');

//SHORT CLEADN SYNTAX TO 'UNPACK':
//VALUES FROM ARRAYS AND PROPERTIES FROM OBJECTS INTO DISTINCT VARIABLES

const raceResults = [
	'Eliud Kipchoge',
	'Feyisa Lelisa',
	'Galen Rupp',
	'Ghirmay Ghebreslassie',
	'Alphonce Simbu',
	'Jared Ward'
];
//THREE NEW VARIABLES ARE CREATED FROM THE 0(gold), 1(silver), 2(bronze) INDEX OF raceResults
const [ gold, silver, bronze ] = raceResults;
//SET INDEX FOR EACH VARIALBLE USING COMMAS WITH NO VALUE AFTER THEM
const [ first, , , fourth ] = raceResults;
//COLLECT ALL VARIABLES PAST THE FIRST ONE (ZERO INDEX)
const [ winner, ...others ] = raceResults;

const [ , second, , , fifth ] = raceResults;

//UNPACK ELEMENTS FROM OBJECTS

const runner = {
	firstName: 'Eliud',
	lastName: 'Kipchoge',
	country: 'Kenya',
	title: 'Elder of the Order of the Golden Heart of Kenya'
};

const { firstName, lastName, time } = runner;
//firstName = Eliud
//lastName = Kipchoge
//time = undefined

//CHANGE NAME OF VARIABLE:
const { country: nation, title: honor } = runner;
//nation = kenya
//honor = title

//USING REST SYNTAX TO COLLECT ELEMENTS AFTER SPECIFIC DECLARATIONS
const team = {
	teamName: 'Jazz',
	city: 'Salt Lake',
	owner: 'Gail Miller',
	coach: 'Quin Snyder'
};
const { teamName, city, ...otherData } = team;

const house = {
	address: '123 main street',
	city: 'Portland',
	state: 'Oregon',
	sqFt: 2400,
	price: 350000
};

const { address, price, sqFt, ...areaData } = house;

const results = [
	{
		first: 'Eliud',
		last: 'Kipchoge',
		country: 'Kenya'
	},
	{
		first: 'Feuisa',
		last: 'Lilesa',
		country: 'Ethiopia'
	},
	{
		first: 'Galen',
		last: 'Rupp',
		country: 'United States'
	}
];

const [ { first: goldWinner }, { country } ] = results;
