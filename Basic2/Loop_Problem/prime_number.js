//Write a javascript program to check whether a given number is prime or not
//First method(O(n) time complexity)
// let readlineSync = require("readline-sync");
// let num = parseInt(readlineSync.question("Enter a number "));
// let div = 2;
// if(num===1)
// {
//     console.log(`${num} is not a prime number`);
// }
// else
// {
//     while(div<num)
//     {
//         if(num%div===0)
//         {
//             break;
//         }
//         div++;
//     }
//     if(div>=num)
//     {
//         console.log(`${num} is a prime number`);
//     }
//     else
//     {
//         console.log(`${num} is not a prime number`);
//     }
// }

// second method()

// let readlineSync = require("readline-sync");
// let num = parseInt(readlineSync.question("Enter a number "));
// let div = 2;
// if(num===1)
// {
//     console.log(`${num} is not a prime number`)
// }
// else
// {
//    while(div<=parseInt(num/2))
//    {
//      if(num % div === 0)
//      {
//          break;
//      }
//      div++;
//     }
//     if(div>parseInt(num/2))
//     {
//         console.log(`${num} is a prime number`);
//     }
//     else
//     {
//             console.log(`${num} is not a prime number`);
//     }
// }

/* Third method(Efficient method(O(sqrt(n)) time complexity)) */

// let readlineSync = require("readline-sync");
// let num = parseInt(readlineSync.question("Enter a number "));
// let div = 2;
// if(num === 1)
// {
//     console.log(`${num} is not a prime number`);
// }
// else{
//     while(div*div<=num)
//     {
//         if(num % div === 0)
//         {
//             break;
//         }
//         div++;
//     }
//     if(div*div>num)
//     {
//        console.log(`${num} is a prime number`);
//     }
//     else{
//         console.log(`${num} is not a prime number`);
//     }
// }

/* 2. Write a program to display first N prime number*/

let readlineSync = require("readline-sync");
let num = parseInt(readlineSync.question("Enter a number "));
let n = 2;
let count = 0;
while(true)
{
   let div = 2;
   while(div*div<=n)
   {
      if(n%div===0)
      {
         break;
      }
      div++;
   }
   if(div*div>n)
   {
     console.log(`${n}`);
     count++;
     n++;
   }
   else
   {
      n++;
   }
   if(count===num)
   {
     break;
   }
}