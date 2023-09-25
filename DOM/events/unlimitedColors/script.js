// generate a random color

const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i<6; i++)
    {
       color += hex[Math.floor(Math.random()*16)];
    //    console.log(color);
    }
    
    return color;
}
let intervalId;
// document.querySelector("#start").addEventListener("click", function(){
//     intervalId = setInterval(function(){
//       document.body.style.backgroundColor = randomColor();
//     }, 1000);
// })
const startChangingColor = function(){
    if(!intervalId)
    {
        intervalId = setInterval(bgColor, 1000);
    }
    function bgColor(){
        document.body.style.backgroundColor = randomColor();
    }
}

document.querySelector("#start").addEventListener("click", startChangingColor);

const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
}

document.querySelector("#stop").addEventListener("click", stopChangingColor);