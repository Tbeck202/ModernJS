console.log('Connected!');
// VALUE TYPE VARIABLE (STRINGS, NUMS)- VALUE IS STORED IN MEMORY
// REFERENCE TYPE VARIABLE (ARRAYS AND OBJECTS) - VALUE IS STORED AS A REFERENCE TO A POINT IN MEMORY
// CONST IS MOST OFTEN USED FOR ARRAYS - values inside array can change because the reference point remains the same

const foods = [ 'milk' ];
console.log(foods);
foods.push('Chocolate');
console.log(foods);
foods.unshift('tortillas');
console.log(foods);
foods.pop();
foods.pop();
console.log(foods);
