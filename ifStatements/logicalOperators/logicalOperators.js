console.log("JS file connected!");
            // AND OPERATOR
//ex1-------------------------------------------
let password = 'tacotuesday'
if (password.length >= 8 && password.indexOf(' ') === -1){
    console.log('Valid Password!');
}
else if (password.length >= 8 && password.indexOf(' ') !== -1){   // This could/should be a nested statement 
    console.log("Password cannot contain a space!");
}
else if (password.length < 8 && password.indexOf(' ') === -1){    // This could/should be a nested statement 
    console.log("Password must be more than eight characters!");
}
else {
    console.log('Password must be more than eight characters and cannot contain spaces!')
}

//ex 2-----------------------------------------
let num = 1;
if(num >= 1 && num <= 10){
    console.log("Number is between 1 and 10")
}
else {
    console.log("Please guess a number between 1 and 10!")
}

            // OR OPERATOR
//ex 1---------------------------------------------
let age = 66;
if(age < 6 || age >= 65){
    console.log('You get in for free!')
}
else {
    console.log("Ten dollars please.")
}

//ex 2-------------------------------------------------
let color = "purple";
if (color === 'purple' || color === 'orchid' || color === 'violet'){
    console.log("You love purple!");
}
else {
    console.log("Good color...but have you tried purple?");
}

            // NOT OPERATOR
// ex 1----------------------------------------------------
let loggedIn = "";
if (!loggedIn){
    console.log("Log in please");
}

// ex 2-----------------------------------------------------
let flavor = "apple";
if (flavor !== "grape" && flavor !== 'cherry'){
    console.log("We don't have that flavor!");
}
else {
    console.log("yum!");
}

if(!(flavor === 'grape' || flavor === 'cherry')){
    console.log("We only have grape and cherry");
}

            //Presedence
let x = 7;
x == 7 || x === 3 && x > 10  // evaluates as true
console.log(x == 7 || x === 3 && x > 10)