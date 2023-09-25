let arr1 = [3,3,5,4];
let target = 6;


var func=(arr1, target)=>{
    let obj ={};
    for(let i=0;i<arr1.length;i++)
    {
      obj[arr1[i]]=i;
    }
    for(let j=0; j<arr1.length; j++)
    {
      if(obj[target-arr1[j]]!==undefined && obj[arr1[j]]!==undefined)
      {
        return [obj[arr1[j]],obj[target-arr1[j]]];
      }
    }
};
var res = func(arr1, target);
console.log(res);
// const obj = {
//     1: 0,
//     2: 1,
//     3 :2,
    
// };
// console.log(obj[4]);
// console.log(typeof null);