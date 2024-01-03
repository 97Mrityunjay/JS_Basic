// let a=10;
// var func=(a)=>{
//    a++;
// }
// func(a);
// console.log(a);
tipper("5");
function tipper(a)
{
  var bill=parseInt(a);
  console.log(bill+5);
}
var bigtipper=function(a){
   
        var bill=parseInt(a);
         console.log(bill+15);
      
}
bigtipper("200");
const courseList=["react","angular","vue","node.js"];
const randomCourse=courseList[Math.floor(Math.random()*courseList.length)];
console.log(randomCourse);

            
let x = 10;
{
  console.log(x);
  let x = 20;
}

