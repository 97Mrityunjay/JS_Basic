// block scope
{
    var x=10; // Exist in function scope
    /*Variables declared with the var keyword cannot have block scope and they can be 
      declared inside a {} block and can be accessed from outside the block*/
    console.log(x);
}
console.log(x);
{
    let y=20; //Exist in block scope
    const z=30; //exist in block scope
    // variables declared with the let and const keyword having block scope and they can 
   //  be declared inside a {} block and cannot be accessed from outside the block.
   console.log(y);   
   console.log(z);
}
// console.log(y); throws reference error: y is not defined
// console.log(z); throws reference error: z is not defined

/* Function scope: */
function func()
{
    var num=50;
    //Function scope.
    /* variables defined inside a function are not accessible outside the function
       and variables declared with var, let and const are quite similar when declared 
       inside a function. */
}
func();
/*console.log(num); Reference error: num is not defined */
// let keyword
function myfunc()
{
    let n=60;
    // Function scope
}
myfunc();
// console.log(n); Reference error: n is not defined
// const keyword
function myfunction()
{
    const name="Mrityunjay";
    // Function scope
}
myfunction();
// console.log(name); Reference error: name is not defined.

/*Global scope: Variables declared globally(outside the function) have global scope and 
    global variables can be accessed from anywhere in a program. The variables declared
    outside the function with var, let and const keyword have global scope */

let num1=2; //Global scope
const num2=8; //Global scope
var num3=10; //Global scope
function getnum()
{
    console.log(num1);
    console.log(num2);
    console.log(num3);
    a=70;
    /* Assigning a value to an undeclared variable implicitly creates it as a global
       variable when the assignment is executed.*/
    console.log(a);
}
getnum();
console.log(a);

/* Local scope: variables declared inside a function become local to function. Local
  variables are created when a function starts and deleted when function is executed.
  Local variables have function scope.
 */