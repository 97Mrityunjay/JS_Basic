const arr1 = [0, 1, 2, 0, 0, 3];
for(let i = 0; i<arr1.length; i++)
{
    if(arr1[i] === 0)
    {
        for(let j = i+1; j < arr1.length; j++)
        {
            if(arr1[j] !== 0)
            {
                let temp = arr1[j];
                arr1[j] = arr1[i];
                arr1[i] = temp;
                break;
            }
        }
    }
}
console.log(arr1);