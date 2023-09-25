const coding = ["js", "python", "java", "ruby", "cpp"];

// coding.forEach(function(item){
//       console.log(item);
// })

function printValues(item, index, array) {
    console.log(item, index, array);
}

coding.forEach(printValues);

// coding.forEach((item, index, array) => {
//     // console.log(item, index, array);
// })

const myObj = [
    {
        languageName: "JavaScript",
        languageFile: "js" 
        
    },

    {
        languageName: "Java",
        languageFile: "java"
    }, 

    {
        languageName: "Python",
        languageFile: "py"
    } 
]

myObj.forEach((item) => {
    console.log(item.languageName);
})