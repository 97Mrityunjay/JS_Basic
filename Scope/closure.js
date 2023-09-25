// function init()
// {
//    var firstName = "Mrityunjay";
//    return function sayFirstName(){
//             console.log(firstName);
//           }
// }
// var value = init();
// value();
function x()
{
    var a = 5;
    function y()
    {
        console.log(a);
    }
    return y;
}

// var z = x();
// console.log(z);
// z();
x()();