const nums = [1, 2, 3, 4];

const sumOfArrayElement = nums.reduce( (acc, currVal) => {
    return acc+currVal;
}, 0);

console.log(sumOfArrayElement);

const shoppingCart = [
    {
        item: "JavaScript Course",
        price: 2999
    },

    {
        item: "mobile dev Course",
        price: 5999
    },

    {
        item: "Python Course",
        price: 4999
    },

    {
        item: "Data Science Course",
        price: 12999
    }

];

const priceToPay = shoppingCart.reduce( (acc, currVal) => {
    return acc + currVal.price;
}, 0);

console.log(priceToPay);