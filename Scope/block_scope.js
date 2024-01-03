// block scope is also known as compound statement
// A block is defined by {}
// Block is also known as compound statement.
// Block is used to combine multiple javascript statements into one group
// we need to group these statements together so that we can use multiple statements in a place where Javascript expects only one statement.

// if(true) console.log("mrityunjay");
// if(true)
// {
//     // compound statement
//     var x = 10;
//     console.log(x);
// }

/* Shadowing in JS : If you have same named variable outside the block, the same named variable inside the block shadows the variable of same name outside the block;
If we have same named variables outside as well as inside the block,then the variable inside the block shadows the outer variables.*/

var y = 6;
{
    var y = 5;
    let b = 6;
    const c = 7;
}
console.log(y);
// will print y = 5 since both variables are pointing to same memory location

var z = 6;
{
    let z = 5;
    let b = 6;
    const c = 7;
}
console.log(z);
// will print z = 6 since let has block scope 

// Illegal shadowing 
// let v = 8;
// {
//     var v = 9;
    
// }

const c = 10;
{
    var a = 100;
    let b = 5;
    const c = 9;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
// console.log(a);
// console.log(b);
let b = 20;
function x(){
    var b = 100;
    console.log(b);
}
x();
console.log(b);

// Scope chaining
let n = 10;
{
    let n = 7;
    {
        let n = 9;
        console.log(n);
    }
}
console.log(n);
