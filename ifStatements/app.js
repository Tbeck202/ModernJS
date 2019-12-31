console.log("hi from the console");

// example 1------------------------------
if (1===1){
    console.log("one equals one");
}

// example 2------------------------------
let rating = 17;

if (rating === 3){
    console.log("YOU ARE A SUPERSTAR!")
} 
else if (rating === 2) {
    console.log("Meets expectations")
}
else if (rating === 1) {
    console.log("Step yo' game up!")
}
else {
    console.log("¯\\_(ツ)_/¯")
}

// example 3-----------------------------------
let num = 37;

if (num % 2 !== 0){
    console.log("Odd number!");
}

// ex 4------------------------------------------
let highScore = 1430;
let userScore = 1200;

if(userScore >= highScore){
    console.log(`Congrats! You have the new high score of: ${userScore}`);
    highScore = userScore;
} else {
    console.log(`Good game! Your score was ${userScore}! You just need ${highScore - userScore} more points to get the high score!`)
}

//ex 5 ----------------------------------------------
let password = 'hellokitty';

if(password.length >= 6){
    if(password.indexOf(' ') === -1){
        console.log("valid password.");
    } else {
        console.log("password cannot contain spaces!")
    }
} else {
    console.log("Password must be longer that six characters!")
}