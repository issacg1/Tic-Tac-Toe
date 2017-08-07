console.log("up and running");

var players = [
{
  hands: [],
  win: 0,
},
{
  hands: [],
  win: 0,
}
];

//This below checks whos turn it is
var turn = 0;
function changeTurn (){
  var text2 = document.getElementById("headerText2");
  if (turn === 0){
    turn += 1;
    text2.innerText = "Its " + players[1].name + "'s" + " turn.";
  }
  else{
    turn -=1;
    text2.innerText = "Its " + players[0].name + "'s" + " turn.";
  }
}

/*The below functions changes the color of the box
to the appropriate color and stores the user data */
var posA1 = document.getElementById("posA1");
var posA2 = document.getElementById("posA2");
var posA3 = document.getElementById("posA3");
var posB1 = document.getElementById("posB1");
var posB2 = document.getElementById("posB2");
var posB3 = document.getElementById("posB3");
var posC1 = document.getElementById("posC1");
var posC2 = document.getElementById("posC2");
var posC3 = document.getElementById("posC3");

function posA1B(){
  if (gameStartChecker === 1){
    if (turn === 0){
      posA1.style="background-color: red;"
      players[0].hands.push("A1")
      changeTurn();
      checker1();
      checker2();
      checker3();
      checker4();
      checker5();
      checker6();
      checker7();
      checker8();
      draw();
    }
    else{
      posA1.style="background-color: blue;"
      players[1].hands.push("A1");
      changeTurn();
      checker1();
      checker2();
      checker3();
      checker4();
      checker5();
      checker6();
      checker7();
      checker8();
      draw();
    }
  }
  else{
    alert("The start button must be clicked to start the game");
  }
}
posA1.addEventListener("click", posA1B);

function posA2B (){
  if (gameStartChecker === 1){
    if (turn === 0){
      posA2.style="background-color: red;"
      players[0].hands.push("A2")
      changeTurn();
      checker1();
      checker2();
      checker3();
      checker4();
      checker5();
      checker6();
      checker7();
      checker8();
      draw();
    }
    else{
      posA2.style="background-color: blue;"
      players[1].hands.push("A2");
      changeTurn();
      checker1();
      checker2();
      checker3();
      checker4();
      checker5();
      checker6();
      checker7();
      checker8();
      draw();
    }
  }
  else{
    alert("The start button must be clicked to start the game");
  }
}

posA2.addEventListener("click", posA2B);

function posA3B (){
  if (gameStartChecker === 1){
    if (turn === 0){
      posA3.style="background-color: red;"
      players[0].hands.push("A3")
      changeTurn();
      checker1();
      checker2();
      checker3();
      checker4();
      checker5();
      checker6();
      checker7();
      checker8();
      draw();
    }
    else{
      posA3.style="background-color: blue;"
      players[1].hands.push("A3");
      changeTurn();
      checker1();
      checker2();
      checker3();
      checker4();
      checker5();
      checker6();
      checker7();
      checker8();
      draw();
    }
  }
  else{
    alert("The start button must be clicked to start the game");
  }
}

posA3.addEventListener("click", posA3B);

function posB1B(){
  if (gameStartChecker === 1){
    if (turn === 0){
      posB1.style="background-color: red;"
      players[0].hands.push("B1");
      changeTurn();
      checker1();
      checker2();
      checker3();
      checker4();
      checker5();
      checker6();
      checker7();
      checker8();
      draw();
    }
    else{
      posB1.style="background-color: blue;"
      players[1].hands.push("B1");
      changeTurn();
      checker1();
      checker2();
      checker3();
      checker4();
      checker5();
      checker6();
      checker7();
      checker8();
      draw();
    }
  }
  else{
    alert("The start button must be clicked to start the game");
  }
}

posB1.addEventListener("click", posB1B);

function posB2B(){
  if (gameStartChecker === 1){
    if (turn === 0){
      posB2.style="background-color: red;"
      players[0].hands.push("B2");
      changeTurn();
      checker1();
      checker2();
      checker3();
      checker4();
      checker5();
      checker6();
      checker7();
      checker8();
      draw();
    }
    else{
      posB2.style="background-color: blue;"
      players[1].hands.push("B2");
      changeTurn();
      checker1();
      checker2();
      checker3();
      checker4();
      checker5();
      checker6();
      checker7();
      checker8();
      draw();
    }
  }
  else{
    alert("The start button must be clicked to start the game");
  }
}

posB2.addEventListener("click", posB2B);

function posB3B(){
  if (gameStartChecker === 1){
    if (turn === 0){
      posB3.style="background-color: red;"
      players[0].hands.push("B3");
      changeTurn();
      checker1();
      checker2();
      checker3();
      checker4();
      checker5();
      checker6();
      checker7();
      checker8();
      draw();
    }
    else{
      posB3.style="background-color: blue;"
      players[1].hands.push("B3");
      changeTurn();
      checker1();
      checker2();
      checker3();
      checker4();
      checker5();
      checker6();
      checker7();
      checker8();
      draw();
    }
  }
  else{
    alert("The start button must be clicked to start the game");
  }
}

posB3.addEventListener("click", posB3B);

function posC1B(){
  if (gameStartChecker === 1){
    if (turn === 0){
      posC1.style="background-color: red;"
      players[0].hands.push("C1");
      changeTurn();
      checker1();
      checker2();
      checker3();
      checker4();
      checker5();
      checker6();
      checker7();
      checker8();
      draw();
    }
    else{
      posC1.style="background-color: blue;"
      players[1].hands.push("C1");
      changeTurn();
      checker1();
      checker2();
      checker3();
      checker4();
      checker5();
      checker6();
      checker7();
      checker8();
      draw();
    }
  }
  else{
    alert("The start button must be clicked to start the game");
  }
}

posC1.addEventListener("click", posC1B);

function posC2B(){
  if (gameStartChecker === 1){
    if (turn === 0){
      posC2.style="background-color: red;"
      players[0].hands.push("C2");
      changeTurn();
      checker1();
      checker2();
      checker3();
      checker4();
      checker5();
      checker6();
      checker7();
      checker8();
      draw();
    }
    else{
      posC2.style="background-color: blue;"
      players[1].hands.push("C2");
      changeTurn();
      checker1();
      checker2();
      checker3();
      checker4();
      checker5();
      checker6();
      checker7();
      checker8();
      draw();
    }
  }
  else{
    alert("The start button must be clicked to start the game");
  }
}

posC2.addEventListener("click", posC2B);

function posC3B(){
  if (gameStartChecker === 1){
    if (turn === 0){
      posC3.style="background-color: red;"
      players[0].hands.push("C3");
      changeTurn();
      checker1();
      checker2();
      checker3();
      checker4();
      checker5();
      checker6();
      checker7();
      checker8();
      draw();
    }
    else{
      posC3.style="background-color: blue;"
      players[1].hands.push("C3");
      changeTurn();
      checker1();
      checker2();
      checker3();
      checker4();
      checker5();
      checker6();
      checker7();
      checker8();
      draw();
    }
  }
  else{
    alert("The start button must be clicked to start the game");
  }
}
posC3.addEventListener("click", posC3B);

//These functions below check the possible wins
function checker1(){
  var chickenDinner = 0;
  var winnerWinner = 0
  for (var x = 0; x < players.length; x++) {
   for (var i = 0; i < players[x].hands.length; i++) {
     if (players[x].hands[i] === "A1"){
        if (players[x] === players[0]){
          chickenDinner += 1;
        }
        else {
          winnerWinner +=1
        }
      }
     if (players[x].hands[i] === "A2"){
        if (players[x] === players[0]){
          chickenDinner += 1;
        }
        else {
          winnerWinner +=1
        }
      }
     if (players[x].hands[i] === "A3"){
       if (players[x] === players[0]){
          chickenDinner += 1;
        }
        else {
          winnerWinner +=1
        }
      }
    }
  }
  if (chickenDinner === 3 || winnerWinner === 3){
      winner();
      chickenDinner = 0;
      winnerWinner = 0;
  }
}

function checker2(){
var chickenDinner = 0;
  var winnerWinner = 0
  for (var x = 0; x < players.length; x++) {
   for (var i = 0; i < players[x].hands.length; i++) {
     if (players[x].hands[i] === "A1"){
        if (players[x] === players[0]){
          chickenDinner += 1;
        }
        else {
          winnerWinner +=1
        }
      }
     if (players[x].hands[i] === "B2"){
        if (players[x] === players[0]){
          chickenDinner += 1;
        }
        else {
          winnerWinner +=1
        }
      }
     if (players[x].hands[i] === "C3"){
       if (players[x] === players[0]){
          chickenDinner += 1;
        }
        else {
          winnerWinner +=1
        }
      }
    }
  }
  if (chickenDinner === 3 || winnerWinner === 3){
      winner();
      chickenDinner = 0;
      winnerWinner = 0;
  }
}

function checker3(){
  var chickenDinner = 0;
  var winnerWinner = 0
  for (var x = 0; x < players.length; x++) {
   for (var i = 0; i < players[x].hands.length; i++) {
     if (players[x].hands[i] === "C1"){
        if (players[x] === players[0]){
          chickenDinner += 1;
        }
        else {
          winnerWinner +=1
        }
      }
     if (players[x].hands[i] === "B2"){
        if (players[x] === players[0]){
          chickenDinner += 1;
        }
        else {
          winnerWinner +=1
        }
      }
     if (players[x].hands[i] === "A3"){
       if (players[x] === players[0]){
          chickenDinner += 1;
        }
        else {
          winnerWinner +=1
        }
      }
    }
  }
  if (chickenDinner === 3 || winnerWinner === 3){
      winner();
      chickenDinner = 0;
      winnerWinner = 0;
  }
}

function checker4(){
  var chickenDinner = 0;
  var winnerWinner = 0
  for (var x = 0; x < players.length; x++) {
   for (var i = 0; i < players[x].hands.length; i++) {
     if (players[x].hands[i] === "A1"){
        if (players[x] === players[0]){
          chickenDinner += 1;
        }
        else {
          winnerWinner +=1
        }
      }
     if (players[x].hands[i] === "B1"){
        if (players[x] === players[0]){
          chickenDinner += 1;
        }
        else {
          winnerWinner +=1
        }
      }
     if (players[x].hands[i] === "C1"){
       if (players[x] === players[0]){
          chickenDinner += 1;
        }
        else {
          winnerWinner +=1
        }
      }
    }
  }
  if (chickenDinner === 3 || winnerWinner === 3){
      winner();
      chickenDinner = 0;
      winnerWinner = 0;
  }
}

function checker5(){
  var chickenDinner = 0;
  var winnerWinner = 0
  for (var x = 0; x < players.length; x++) {
   for (var i = 0; i < players[x].hands.length; i++) {
     if (players[x].hands[i] === "A2"){
        if (players[x] === players[0]){
          chickenDinner += 1;
        }
        else {
          winnerWinner +=1
        }
      }
     if (players[x].hands[i] === "B2"){
        if (players[x] === players[0]){
          chickenDinner += 1;
        }
        else {
          winnerWinner +=1
        }
      }
     if (players[x].hands[i] === "C2"){
       if (players[x] === players[0]){
          chickenDinner += 1;
        }
        else {
          winnerWinner +=1
        }
      }
    }
  }
  if (chickenDinner === 3 || winnerWinner === 3){
      winner();
      chickenDinner = 0;
      winnerWinner = 0;
  }
}

function checker6(){
  var chickenDinner = 0;
  var winnerWinner = 0
  for (var x = 0; x < players.length; x++) {
   for (var i = 0; i < players[x].hands.length; i++) {
     if (players[x].hands[i] === "A3"){
        if (players[x] === players[0]){
          chickenDinner += 1;
        }
        else {
          winnerWinner +=1
        }
      }
     if (players[x].hands[i] === "B3"){
        if (players[x] === players[0]){
          chickenDinner += 1;
        }
        else {
          winnerWinner +=1
        }
      }
     if (players[x].hands[i] === "C3"){
       if (players[x] === players[0]){
          chickenDinner += 1;
        }
        else {
          winnerWinner +=1
        }
      }
    }
  }
  if (chickenDinner === 3 || winnerWinner === 3){
      winner();
      chickenDinner = 0;
      winnerWinner = 0;
  }
}

function checker7(){
  var chickenDinner = 0;
  var winnerWinner = 0
  for (var x = 0; x < players.length; x++) {
   for (var i = 0; i < players[x].hands.length; i++) {
     if (players[x].hands[i] === "B1"){
        if (players[x] === players[0]){
          chickenDinner += 1;
        }
        else {
          winnerWinner +=1
        }
      }
     if (players[x].hands[i] === "B2"){
        if (players[x] === players[0]){
          chickenDinner += 1;
        }
        else {
          winnerWinner +=1
        }
      }
     if (players[x].hands[i] === "B3"){
       if (players[x] === players[0]){
          chickenDinner += 1;
        }
        else {
          winnerWinner +=1
        }
      }
    }
  }
  if (chickenDinner === 3 || winnerWinner === 3){
      winner();
      chickenDinner = 0;
      winnerWinner = 0;
  }
}

function checker8(){
  var chickenDinner = 0;
  var winnerWinner = 0
  for (var x = 0; x < players.length; x++) {
   for (var i = 0; i < players[x].hands.length; i++) {
     if (players[x].hands[i] === "C1"){
        if (players[x] === players[0]){
          chickenDinner += 1;
        }
        else {
          winnerWinner +=1
        }
      }
     if (players[x].hands[i] === "C2"){
        if (players[x] === players[0]){
          chickenDinner += 1;
        }
        else {
          winnerWinner +=1
        }
      }
     if (players[x].hands[i] === "C3"){
       if (players[x] === players[0]){
          chickenDinner += 1;
        }
        else {
          winnerWinner +=1
        }
      }
    }
  }
  if (chickenDinner === 3 || winnerWinner === 3){
      winner();
      chickenDinner = 0;
      winnerWinner = 0;
  }
}

//Makes sure the users wants to reset the game as well as resets it for them.
var button2 = document.getElementById("button2");
button2.addEventListener("click", sure);

function sure (){
  var answerS = prompt("Are you sure you want to restart the game? Type yes to proceed and no to cancel.");
  if (answerS === "yes" || answerS === "Yes"){
    reset();
  }
}

function reset (){
  if(gameStartChecker === 0){
    alert("Press the start button to start the game.");
  }
  else{
    players[0].hands = [];
    players[1].hands = [];
    turn = 0;
    posA1.style="background-color: white;"
    posA2.style="background-color: white;"
    posA3.style="background-color: white;"
    posB1.style="background-color: white;"
    posB2.style="background-color: white;"
    posB3.style="background-color: white;"
    posC1.style="background-color: white;"
    posC2.style="background-color: white;"
    posC3.style="background-color: white;"
  }
}

//This function is for when a user wins
function winner (){
  var text = document.getElementById("headerText");
  var text2 = document.getElementById("headerText2");
  var score = document.getElementById("info");
  if (turn === 0){
    alert("The winner is " + players[1].name);
    text.innerHTML = "The winner is " + players[1].name;
    players[1].win += 1;
    reset();
  }
  else{
    alert("The winner is " + players[0].name);
    text.innerHTML = "The winner is " + players[0].name;
    players[0].win += 1;
    reset();
  }
  text2.innerHTML = "&darr;Check the scoreboard below&darr;";
  score.innerHTML = players[0].name + ":" + players[0].win + "&nbsp;&nbsp;&nbsp;" + players[1].name + ":" + players[1].win;
}


//Button for starting the game
var buttonStart = document.getElementById("button1");
button1.addEventListener("click", startGame);

var gameStartChecker = 0;
function startGame (){
  if (gameStartChecker === 0){
    players[0].name = prompt("PLAYER 1: Whats your name?");
    if (players[0].name.length < 1) {
      prompt("A name must be entered for player 1.")
    }
    players[1].name = prompt("PLAYER 2: Whats your name?");
    if (players[1].name.length < 0) {
      prompt("A name must be entered for player 2.")
    }
    alert(players[0].name + " goes first.");
    gameStartChecker += 1
  }
  else{
    alert("To restart the game with new players refresh this page. To keep going with the same players just start playing.");
  }
}

//Draw alert
function draw(){
  if ((players[0].hands.length === 4 && players[1].hands.length === 5) || (players[0].hands.length === 5 && players[1].hands.length === 4)){
    alert("Its a draw!");
    reset();
  }
}
