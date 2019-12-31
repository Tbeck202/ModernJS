console.log("Connected!");
// ex1---------------------------------------
let day = 7;

switch(day){
    case 1: 
        console.log("monday");
        break;
    case 2: 
        console.log("tuesday");
        break;
    case 3: 
        console.log("wednesday");
        break;
    case 4: 
        console.log("thursday");
        break;
    case 5: 
        console.log("friday");
        break;
    case 6: 
        console.log("saturday");
        break;
    case 7: 
        console.log("sunday");
        break;
    default:
        console.log("Invalid Day!")
}

// ex2---------------------------------------
let emoji = 'happy face';
switch (emoji) {
    case 'sad face':
    case 'happy face':
        console.log('yellow');
        break;
    case 'eggplant':
        console.log('purple');
        break;
    case 'heart':
    case 'lips':
        console.log('red');
        break;
    default:
        console.log(`${emoji} is not a valid Emoji!`)
}