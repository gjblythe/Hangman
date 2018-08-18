//variables
var game = [
  "black flag",
  "x",
  "dead kennedys",
  "the cramps",
  "bad brains",
  "descendents",
  "bad religion"
];
var choice = Math.floor(Math.random() * game.length);
var answer = game[choice];
var myLength = answer.length;
var display = [myLength];
var win = myLength;
var winCounter = 0;
var loss = 0;
var letters = answer.split("");
var attemptsLeft = 8;
var output = "";
var userLetter = "";
var chosen = [];
console.log(answer);

//setup function
function reset() {
  choice = Math.floor(Math.random() * game.length),
    attemptsLeft = 8;
    chosen = [];
};

var setup = function() {
  for (var i = 0; i < answer.length; i++) {
    display[i] = "- ";
    output = output + display[i];
  }

  document.getElementById("bandName").innerHTML = output;
  output = "";
};


//on window
window.onload = function() {
  setup(), reset();
};

document.onkeyup = function(event) {
  userLetter = event.key;
  attemptsLeft--;
  chosen.push(userLetter);
  document.getElementById("bogusGuess").innerHTML = chosen;

  console.log(userLetter);
  console.log(attemptsLeft);
  

   {
    output = "";
    userLetter = letters.value;
    letters.value = "";
    

    for (var c = 0; c < answer.length; c++) {
      
      if (userLetter === letters[c]) {
        display[c] = userLetter
        win--;
      }
    
    output = output + display[c];
    }
  }
  document.getElementById("bandName").innerHTML = output;
  output = " ";

  //logic
  if (win < 1) {
    winCounter++,
      (document.getElementById("wins").innerHTML = winCounter),
      reset(),
      setup();
  }

  if (attemptsLeft === 0) {
    loss++,
      (document.getElementById("loss").innerHTML = loss),
      reset(),
      setup();
  } else {
    document.getElementById("guessRemain").innerHTML = attemptsLeft;
  }
};
