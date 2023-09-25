// const itemArr = Array(9).fill("empty",0,9);
// console.log(itemArr);
let num = 1;
let countPrime=0;
 while(1) {

   let div = 2;
   if(num===1)
   {
     num++;
     continue;
   }
   while (div*div<=num) {
       if(num%div===0)
       {
            break;
       }
       div++;
   }
   if(div*div>num)
   {
     console.log(num);
     countPrime++;
     if(countPrime === 10)
        break;
   }
   num++;
   

}