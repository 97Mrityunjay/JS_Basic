let randomNumber = parseInt(Math.random()*100+1);
console.log(randomNumber);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
let remainingGuess = document.querySelector(".lastResult");
const startOver = document.querySelector(".resultParas");
const lowOrHi = document.querySelector(".lowOrHi");

const p = document.createElement("p");
let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener("click", function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(isNaN(guess));
        console.log(guess);
        validateGuess(guess);
    })
}
function validateGuess(guess){
    if(isNaN(guess)){
       alert(`Please enter valid number`);
    }
    else if(guess<=1){
        alert(`Please enter a number greater than 1`);
    }
    else if(guess>=100){
        alert(`please enter a number less than 100`);
    }
    else{
      prevGuess.push(guess);
      if(numGuess === 11){
        displayGuess(guess);
        displayMessage(`Game over. Random number was ${randomNumber}`);
        endGame();
      }
      else{
        displayGuess(guess);
        checkGuess(guess);
      }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`Your guess is right`);
        endGame();
    }
    else if(guess<randomNumber){
        displayMessage(`Too Low`);
    }
    else if(guess>randomNumber){
        displayMessage(`Too high`);
    }
}

function displayGuess(guess){
    userInput.value = "";
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remainingGuess.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`

}

function endGame(){
    userInput.value = "";
    userInput.setAttribute("diabled", "");
    submit.setAttribute("disabled", "")
    p.classList.add("button")
    p.innerHTML = `<h2 id = "newGame">Start new game</h2>`;
    console.log(p);
    startOver.appendChild(p);
    playGame = false;
    newGame();
    
}

function newGame(){
    const newGame = document.querySelector("#newGame");

    newGame.addEventListener("click", function(e){
        randomNumber = parseInt(Math.random()*100+1);
        prevGuess = [];
        numGuess = 1;
        playGame = true;
        guessSlot.innerHTML = "";
        remainingGuess.innerHTML= `${11-numGuess}`;
        displayMessage("")
        userInput.removeAttribute("disabled");
        submit.removeAttribute("disabled")
        p.removeChild(newGame) ;  

    })

}