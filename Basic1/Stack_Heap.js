// Stack(Primitive), Heap(Non-Primitive)

let emailId = "mrityunjaykumarjha.19gcemca043@galgotiacollege.edu";

let anotherEmailId = emailId;
anotherEmailId = "mritunjayku99@gmail.com"
console.log(emailId);
console.log(anotherEmailId);
let userOne= {
    email : "user@google.com",
    upi :  "user@ybl",
};

userTwo = userOne;
userTwo.email = "mrityunjay@google.com"
console.log(userOne.email);
console.log(userTwo.email);