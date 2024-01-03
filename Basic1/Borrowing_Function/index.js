// Function borrowing : We can borrow functions from other objects and use it with the data of some other objects.

// call method is used to invoke a function directly by passing in the reference which points to this variable inside the method. Calls a method of an object, substituting another object for the current object.

// apply method is exactly same as call method , the only difference is that apply method takes second argument as an arraylist of the arguments which needs to be passed to the function which apply method invokes. Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.

//Bind method does not directly invokes the method but gives us the copy of exactly same method, which can be invoked later. For a given function, creates a bound function that has the same body as the original function. The this object of the bound function is associated with the specified object, and has the specified initial parameters.



let printDetails = function(homeTown, state){
    console.log(this.firstName+" "+ this.lastName + " "+ "from"  + " " +homeTown + ","+state);
}
let studentOne = {
    firstName: "Mrityunjay",
    lastName: "Kumar Jha"
}

let studentTwo = {
    firstName: "Ajay",
    lastName: "Pandey"
}
printDetails.call(studentOne,"Muzaffarpur","Bihar");
printDetails.apply(studentTwo, ["Varanasi", "Uttar Pradesh"]);

let res = printDetails.bind(studentOne, "Muzaffarpur", "Bihar");
res();
