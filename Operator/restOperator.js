function myFun(a,b,...args)
{
  console.log(args);
  let sum = 0;
  let result = a+b;
  for(const arg of args)
  {
    sum+=arg;
  }
  return [result,sum];
}
console.log(myFun(2,4,5,6,8,9,10,11,12,13,14,15));
function fun(a,b,...args)
{
   console.log(args);
   let add=0;
   let mul = a*b;
   for (const arg of args) {
    add += arg;
   }
   return [mul,add]
}
console.log(fun(2,4,6,8,9,10,12,23));