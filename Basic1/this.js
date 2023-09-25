// for all regular function calls, this points to window object
console.log(this);
const user={
    firstName: "Mrityunjay",
    courseCount: 43,
    getcoursecount: function(){
        console.log("Line 7",this);
        function sayhello()
        {
            console.log("Hello");
            console.log("Line 11",this);
        }
        sayhello();
    },
};
user.getcoursecount();
function func()
{
    var x=10;
    
}
func();
// document.write(x);