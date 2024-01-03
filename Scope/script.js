function a()
{
    var b = 10;
    c();
    function c()
    {
        console.log(b);
    }
    return b;
}

a();

var x = 23;
let y = 34;
console.log(y);

var z= 3;
{
    var z = 5;

}
console.log(z);