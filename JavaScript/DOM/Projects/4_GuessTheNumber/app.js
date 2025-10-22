let form = document.querySelector(".form");
let remChances = document.querySelector(".lastResult");
let value = document.querySelector(".lowOrHi");
let previousValue = document.querySelector(".guesses");
let randomNumber = Math.floor(Math.random() * 100) + 1;
let chances = 10;
remChances.innerHTML = chances;
let preGuess = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let guessedValue = parseInt(document.querySelector("#guessField").value);

  let calculate = () => {
    // let lo = Math.round((startValue + endValue) / 2);
    if (guessedValue === randomNumber) {
      value.innerText = `The value is ${guessedValue}`;
      chances -= 1;
      remChances.innerHTML = chances;
      preGuess.push(guessedValue);
      previousValue.innerHTML = preGuess;
      playToken(chances);
    } else if (guessedValue > randomNumber) {
      value.innerText = `The value is higher.`;
      chances -= 1;
      remChances.innerHTML = chances;
      preGuess.push(guessedValue);
      previousValue.innerHTML = preGuess;
      playToken(chances);
    } else {
      value.innerText = `The value is lower`;
      chances -= 1;
      remChances.innerHTML = chances;
      preGuess.push(guessedValue);
      previousValue.innerHTML = preGuess;
      playToken(chances);
    }
    
  };

  let playToken = (chances) => {
    if (chances === 0) {
      document.getElementById("subt").setAttribute("disabled", "true");
      alert("Your chances are over....");
    }else{
    // Clear input field after submission
    document.querySelector("#guessField").value = "";
    }
  };

  if (guessedValue < 1) {
    alert("Please enter a valid guess..");
  } else if (guessedValue > 100) {
    alert("Please enter a valid guess..");
  } else if (isNaN(guessedValue)) {
    alert("Please enter a valid guess..");
  } else {
    calculate();
  }
});
