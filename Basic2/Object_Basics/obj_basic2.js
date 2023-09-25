// const tinderUser = new Object();

const tinderUser = {};
console.log(tinderUser);

tinderUser.id = "123abc";
tinderUser.name = "Mrityunjay";
tinderUser.isLoggedIn = false;

const regularUser = {
    email : "mritunjayku99@gmail.com",
    userName : {
        fullName: {
            firstName : "Mrityunjay",
            lastName : "Kumar Jha"
        }
    }
}

console.log(regularUser.userName.fullName.firstName);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj3 = {5: "e", 6: "f"};

// const obj4 = {obj1, obj2, obj3};

// console.log(obj4.obj1["2"]);

// const obj4 = Object.assign({}, obj1, obj2, obj3);

const obj4 = {...obj1, ...obj2, ...obj3};
console.log(obj4);

const user = [ 
{
    id : 1,
    email: "mrityunjayku97@gmail.com"
},

{
    id : 1,
    email: "mrityunjayku97@gmail.com"
},

{
    id : 1,
    email: "mrityunjayku97@gmail.com"
}

];

user[1].email;

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

const course = {
   courseName : "JS in depth",
   price: "999",
   courseInstructor: "Hitesh Choudhary"
}

// console.log(course.courseInstructor);
const {courseInstructor} = course;
console.log(courseInstructor);

const navbar = ({courseName, courseInstructor}) => {
    return `Course Instructor of ${courseName} course is ${courseInstructor}`;
}

console.log(navbar(course));

//JSON
// {
//     "name" : "Mrityunjay",
//     "courseName" : "JS in Hindi",
//     "price" : "free"
// }