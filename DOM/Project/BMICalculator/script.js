const form = document.querySelector("form");
console.log(form);
// this usecase will give you empty
// const height = parseInt(document.querySelector("#height").value);
// console.log(height);
form.addEventListener("submit", function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const res = document.querySelector("#res");
    // res.innerHTML = 4
    if(height === '' || height<0 || isNaN(height))
    {
        res.innerHTML = `please enter valid height ${height}`;
    }
    else if(weight === '' || weight<0 || isNaN(weight))
    {
        res.innerHTML = `please enter valid weight ${weight}`
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        res.innerHTML = `<span>${bmi} ${bmi<18.6 ? `Under Weight` : ((bmi===18.6 || bmi===24.6) ? ` Normal Range` : ((bmi>24.9)? `Overweight` : ``))}</span>`
        // if(bmi<18.6)
        // {
        //     res.innerText = ` Less than 18.6`;
        // }
        // else if(bmi === 18.6 || bmi === 24.6)
        // {
        //     res.innerText =  ` Normal Range`
        // }
    }
})