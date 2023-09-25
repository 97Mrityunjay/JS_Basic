// Hoisting is a phenomenon in javascript by which you can access these variables and functions even before you have initialized it or you have put some value in it, if variable or function is declared somewhere in program. we can access it without any error in JS

var x = 7;
console.log(x);
function sayHello() {
     console.log("Hello");
}
sayHello();
console.log(x);

