const clock = document.getElementById('clock');


setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
    console.log(clock.innerHTML);
}, 1000)