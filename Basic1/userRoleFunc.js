/*Define a function that can answer the role of a user:
A user can be on following roles:
admin- with all access
subadmin- with access to create/delete courses
testprep- with access to create/delete tests
user- consume all content
other- trial user.
Input: getUserRole(name, role)
*/

var getUserRole=(name,role)=>{
   switch (role) {
    case "admin":
            return `${name} is admin with all access`;
            break;

    case "subadmin":
            return `${name} is subadmin with access to create and delete courses`;
            break;

    case "testprep":
           return `${name} is testprep with access to create and delete tests`;
           break;

    case "user":
          return `${name} is user to consume all content`;
          break;
   
    default:
        return `${name} is a trial user`;
        break;
   }
}
console.log(getUserRole("Mrityunjay","user"));
let getUser=getUserRole("Ajay","testprep");
console.log(getUser);
// if([])
// {
//         console.log("[] is truthy value");
// }