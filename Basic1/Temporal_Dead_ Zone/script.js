/* Temporal dead zone is the time since when let variable was hoisted and till it is initialized some value. The time between that is known as temporal dead zone. It is the area of a block where variable is inaccessible until the moment the computer completely intializes it with a value*/

/*
   A let or const variable is said to be in a "temporal dead zone" (TDZ) from the start of the block until code execution reaches the line where the variable is declared and initialized.
*/

//b's temporal dead zone continues here

const b = 15; //b's temporal dead zone ends here
console.log(b);
//a's temporal dead zone
let a = 100; //a's temporal dead zone ends here
console.log(a);
// var c = 30;
// let c = 10;
