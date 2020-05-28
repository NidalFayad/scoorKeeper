var namePlayer1Input = document.querySelector("input[type=name1]");
var namePlayer2Input = document.querySelector("input[type=name2]");

var p1Button = document.querySelector("#p1Button");
var p2Button = document.querySelector("#p2Button");

var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");

var resetButton = document.querySelector("#resetButton");

var level = document.querySelector("p span");
var numInput = document.querySelector("input[type= number]");

var palyerWinDisplay = document.querySelector("#palyerWinDisplay");

var namePlayer1 = "";
var namePlayer2 = "";

var p1Scoor = 0;
var p2Scoor = 0;

var gameOver = false;
var winningScoor = 5;


namePlayer1Input.addEventListener("change", function(){
  namePlayer1 = namePlayer1Input.value;
});

namePlayer2Input.addEventListener("change", function(){
  namePlayer2 = namePlayer2Input.value;
});

p1Button.addEventListener("click", function() {
  if (!gameOver) {
    p1Scoor++;
    if (p1Scoor === winningScoor) {
      gameOver = true;
      p1Display.classList.add("winner");
      palyerWinDisplay.textContent = namePlayer1 + " Win!";
      palyerWinDisplay.classList.add("winner");
    }
    p1Display.textContent = p1Scoor;

  }
});

p2Button.addEventListener("click", function() {
  if (!gameOver) {
    p2Scoor++;
    if (p2Scoor === winningScoor) {
      gameOver = true;
      p2Display.classList.add("winner");
      palyerWinDisplay.textContent = namePlayer2 + " Win!";
      palyerWinDisplay.classList.add("winner");
    }
    p2Display.textContent = p2Scoor;
  }
});


resetButton.addEventListener("click", function(){
  reset();
});

numInput.addEventListener("change", function(){
  level.textContent = numInput.value;
  winningScoor = Number(numInput.value);
  reset();
});

function reset(){
  p1Scoor = 0;
  p2Scoor = 0;

  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  palyerWinDisplay.textContent = "";

  gameOver = false;
}
