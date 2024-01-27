//Write a Javascript problem to print first N natural numbers
// let readlineSync= require("readline-sync");
// let N = parseInt(readlineSync.question("Enter the value of N"));
// let i = 1;
// while(i<=N)
// {
//     console.log(i);
//     i++;
// }

//Write a javascript program to print first N odd natural number
// let readlineSync= require("readline-sync");
// let N = parseInt(readlineSync.question("Enter the value of N"));
// let i = 0;
// while(i<10)
// {
//     console.log(1+2*i);
//     i++;
// }

//Write a javascript program to print first N natural number in reverse order
// let readlineSync= require("readline-sync");
// let N = parseInt(readlineSync.question("Enter the value of N"));
// let i = N;
// while(i>=1)
// {
//     console.log(i);
//     i--;
// }

//Write a program to print first N even natural numbers
// let readlineSync= require("readline-sync");
// let N = parseInt(readlineSync.question("Enter the value of N "));
// let i = 1;
// while(i<=N)
// {
//     console.log(2*i);
//     i++;
// }

//Write a program to calculate sum of first N natural number
// let readlineSync= require("readline-sync");
// let N = parseInt(readlineSync.question("Enter the value of N"));
// let i = 1;
// let sum = 0;
// while(i<=N)
// {
//    sum+=i;
//    i++;
// }
// console.log(sum);


//Write a program to calculate sum of first N even natural numbers
// let readlineSync = require("readline-sync");
// let N = parseInt(readlineSync.question("Enter the value of N "));
// let i = 1;
// let sum = 0;
// while(i<=N)
// {
//    sum += 2*i;
//    i++;
// }
// console.log(sum);


//Write a program to calculate sum of first N odd natural number
let readlineSync = require("readline-sync");
let N = parseInt(readlineSync.question("Enter the value of N "));
let i = 0;
let sum = 0;
let num;
while(i<N)
{
    num = 1+2*i;
    sum = sum+num;
    i++;
}
console.log(sum);