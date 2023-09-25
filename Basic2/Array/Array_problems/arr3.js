let arr = [3,5,7,8,9,12];
console.log(arr);
function sum(arr)
{
     let sum = 0;
     for(let i =0; i<arr.length;i++)
     {
        sum+=arr[i];
     }
     return sum;
}
let result = sum(arr);
console.log(result);

//sum of every elements of array using reduce method
/* reduce method Calls the specified callback function for all the elements in an array.
 The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.*/
let output = arr.reduce((acc, currValue)=>{
    console.log(`acc: ${acc} and currVal: ${currValue}`);
    acc=acc+currValue;
    return acc;
},0);
console.log(output);

let shoppingCart = [
    {
        item : "Javascript course",
        price : 2999
    },

    {
        item : "Mobile development course",
        price : 5000
    },

    {
        item: "Data Science Course",
        price: 12999
    },

    {
        item : "Python Course",
        price : 4000
    }
];

const priceToPay = shoppingCart.reduce((acc, item) => {
    return acc+item.price;
}, 0);

console.log(priceToPay);

