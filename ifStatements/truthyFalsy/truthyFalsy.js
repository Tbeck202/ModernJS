console.log("connected!")
// All values have truthy-ness or falsey-ness
// Falsy values:
    // False
    //0
    //" " (empty string)
    //null
    //undefined
    //NaN
//Evrything else is truthy!!

let mystery = '';

if(mystery){
    console.log("TRUTHY!!");
}
else {
    console.log("FALSY!!")
}

let loggedIn = "tb123";

if(loggedIn){
    console.log("You are logged in!")
}
else {
    console.log("Please log in!")
}