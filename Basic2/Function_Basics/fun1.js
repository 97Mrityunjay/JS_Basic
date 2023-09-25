

function sayMyName(){
    console.log("M");
    console.log("R");
    console.log("I");
    console.log("T");
    console.log("Y");
    console.log("N");
    console.log("J");
    console.log("A");
    console.log("Y");
}

// sayMyName();

// function addTwoNumbers(number1, number2){
// 
//       console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number1;
    //  return result;
   return number1+number2;
}

const result = addTwoNumbers(3, 5);
// console.log(`Result: ${result}`);

function userLoginMessage(userName){
     if(!userName)
     {
      console.log("Please enter user name");
      return;
     }
     return `${userName} is just logged in`;

}

// console.log(userLoginMessage());

function getCartPrice(val1, val2, val3, ...num){
   return num;
}

console.log(getCartPrice(200, 300, 400, 100, 500));

const user = {
    userName : "mrityunjay",
    price: 399
};

function handleObject(anotherObject){
    return `User name is ${anotherObject.userName} and price is ${anotherObject.price}`;

}

console.log(handleObject({
    userName: "Mrityunjay",
    price: 399
}))

const arr = [2, 4, 6, 10];

const getSecondElement = (getArray) => {
    return getArray[1];
}

console.log(getSecondElement([2, 4, 6, 10]));
