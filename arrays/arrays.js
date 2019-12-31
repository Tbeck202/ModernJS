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
