"use strict"; //treat all JS Code as newer version

// alert(3+3); // we are using nodejs, not browser
console.log(3
   +
    3); //code readability should be high. It's readability is low

console.log(3+3); // Readable code

console.log("Mrityunjay");
let name = "Mrityunjay";
let age = 26;
let isLoggedIn = false;
//Primitive type:
// number => 2 to the power 53
// bigint
// string => "" or ''
// boolean => true/false
// null => standalone value
// undefined =>
// symbol => unique

// Non-primitive type
//object

console.log(typeof undefined); //undefined
console.log(typeof null); //object

console.log(typeof NaN);//output will be number

let num = "123ab";
console.log(Number(num));//output will be NaN as num cannot be converted into number
console.log(typeof Number(num));
function fun(num2)
{
   const num1 = 6;
   console.log(num1);
   return num1+num2;
   
}
let num1 = 5;
let res = fun(num1);
console.log(res);
console.log(num1);
