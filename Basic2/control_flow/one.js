const temperature = 41;

// if(temperature < 50)
// {
//     console.log("temperature is less than 50");
// }
// else{
//     console.log("temperature is more than 50");
// }

// console.log("Execute");

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200;
// if(score > 100){
//     let power = "fly";
//     console.log(`User Power is ${power}`);
// }
// console.log(`User power is ${power}`);

const balance = 1000;

// if(balance > 500) console.log("test1"), console.log("test2");

if(balance < 500){
    console.log("less than 500");
}
else if(balance < 750){
    console.log("less than 750");
}
else if(balance < 800){
    console.log("less than 800");
}
else{
    console.log("less than 1200");
}

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// if(userLoggedIn && debitCard && 2 === 3){
//     console.log("Allow to buy course");
// }
// else {
//     console.log("not allowed to buy course");
// }

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
}