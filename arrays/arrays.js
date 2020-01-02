console.log('connected!');

//let shoppingList = [ 'cereal', 'cheese', 'ice' ];
let lotto = [ 45, 10, 27, 23, 2 ];
let myCollection = [ 12, 'dog', true, null, NaN ];

//let colors = [ 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet' ];
//console.log(colors.length, colors[3], colors[colors.length - 1]);

let shoppingList = [ 'Cheddar Cheese', '2% Milk' ];
shoppingList[1] = 'Whole Milk';
shoppingList[shoppingList.length] = 'Ice Cream';

//PUSH AND POP
//PUSH adds data to the end of an array. POP pulls data from the end of an array (that data no longer exists in the original array)

let topSongs = [ 'First Time Ever I Saw Your Face', 'God Only Knows', 'A Day In The Life', 'Life on Mars' ];

topSongs.push('Fortunate Son');
console.log(topSongs);

//SHIFT AND UNSHIFT-----------------
//SHIFT REMOVES THE DATA FROM THE ZERO INDEX AND PUSHES THE REST O FTHE DATA TO THE INDEX TO THE LEFT
//UNSHIFT PUTS DATA INTO ZERO INDEX OF ARRAY AND PUSHES THE REST OF THE DATA TO THE INDEX TO THE RIGHT
//UNSHIFT CAN TAKE MULTIPLE ARGUMENTS - array.unshift(data, moreData, evenMoreData)

let dishesToDo = [ 'Big Platter' ];

dishesToDo.unshift('Plate');
console.log(dishesToDo);
dishesToDo.unshift('Cup');
console.log(dishesToDo);
dishesToDo.unshift('Spoon');
console.log(dishesToDo);

let dish = dishesToDo.shift([ 0 ]);
console.log(dish);
console.log(dishesToDo);

// concat() combines arrays-----------------
let fruits = [ 'apple', 'banana' ];
let veggies = [ 'asparagus', 'carrots' ];
let meats = [ 'steak', 'chicken' ];
let allFoods = fruits.concat(veggies, meats);
console.log(fruits.concat(veggies));
console.log(veggies.concat(fruits));
console.log(allFoods);

// includes() LOOKS FOR PASSED IN VALUE AND RETURNS TRUE OR FALSE
let ingredients = [ 'water', 'corn starch', 'flour', 'cheese', 'brown sugar', 'shrimp', 'eel', 'butter' ];
console.log(ingredients.includes('fish'));
console.log(ingredients.includes('shrimp'));
console.log(ingredients.includes('corn')); //RETURNS FALSE BECAUSE IT LOOKS FOR AN EXACT MATCH
console.log(ingredients.includes('water', 3)); // SECOND VALUE PASSED IS INDEX AT WHICH THE SEARCH BEGINS, IN THIS CASE AT THE THIRD INDEX

if (ingredients.includes('flour')) {
	console.log("I AM GLUTEN FREE! I CAN'T EAT THAT!");
}

//indexOf() LOOKS FOR PASSED IN VALUE AND RETURNS THE INDEX OF THE DATA MATCH. -1 IS RETURNED IF THERE IS NO MATCH
console.log(ingredients.indexOf('eel'));
console.log(ingredients.indexOf('maple syrup'));
console.log(ingredients.indexOf('cheese', 5)); //CAN ALSO PASS IN A NUMBER FOR THE INDEX AT WHICH TO START YOUR SEARCH

//reverse() REVERSES ORDER OF ARRAY. ORIGINAL ARRAY IS CHANGED!!!
let letters = [ 't', 'c', 'e', 'p', 's', 'e', 'r' ];
console.log(letters.reverse());

//join() CONCATENATES ALL DATA IN ARRAY INTO A SINGLE STRING.  ALL NON-STRING DATA IS TURNED INTO A STRING
console.log(letters.join());
console.log(letters.join('.')); //DEFAULT SEPERATOR IS A COMMA BUT CAN BE CHANGED
console.log(letters.join('-'));
console.log(letters.join('')); //SERPERATOR CAN BE REMOVED ALL TOGETHER

// slice() COPIES A SPECIFIED SECTION OF AN ARRAY INTO A NEW ARRAY
// IF NO VALUE PASSED IN, A COPY OF THE ENTIRE ARRAY WILL BE MADE. ORIGINAL IS UNAFFECTED
let animals = [ 'shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise' ];
let swimmers = animals.slice(0, 3); // SECOND NUMBER IS WHERE THE SLICE STOPS. DATA AT THAT INDEX IS NOT INCLUDED!
console.log(swimmers);
let mammals = animals.slice(2, 4);
console.log(mammals);
let reptiles = animals.slice(4); // IF NO SECOND VALUE PASSED IN, SLICE WILL GO UNTIL THE END OF THE ARRAY
console.log(reptiles);
let quadruped = animals.slice(-3);
console.log(quadruped); // NEAGATIVE NUMBER WILL MAKE SLICE START AT END OF ARRAY AND WORK BACK THE NUMBER OF INDICIES SPECIFIED. IN THIS CASE, THREE SPACES.
let copy = animals.slice();
console.log(copy);

// splice() REMOVES OR REPLACES CONTENTS OF AN ARRAY.  ALLOWS YOU TO INSERT DATA TO SPECIFIED POINT IN ARRAY
//splice(startIdx, deleteCount, itemsToInsert) - FIRST VALUE: INDEX TO INSERT AT - SECOND VALUE: HOW MUCH (IF ANY) TO DELETE - THIRD VALUE: WHAT TO INSERT
animals.splice(1, 0, 'octopus');
console.log(animals);
console.log(animals.splice(3, 2)); //IF NO THIRD VALUE, DATA WILL JUST BE DELETED AND VALUES REMOVED WILL BE RETURNED
animals.splice(3, 0, 'snake', 'frog'); //MULTIPLE VALUES CAN BE PASSED IN
console.log(animals);
animals.splice(0, 2, 'SHARK!!!', 'OCTOPUS!!');
console.log(animals);

// sort()  SORTS ELEMENTS OF AN ARRAY IN PLACE AND RETURNS THE SORTED ARRAY
//ALL VALUES ARE CONVERTED TO STRING AND SORTED ALPHABETICALLY (BASED ON UTF-16 VALUES)
let people = [ 'Mrs. Robinson', 'Angie', 'Jolene', 'Maggie May', 'Roxanne' ];
console.log(people.sort());

let nums = [ 34, 10, 100000, 67, 99 ];
console.log(nums.sort());
