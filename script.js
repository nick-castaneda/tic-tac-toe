///////////////////////////////////////////////////////////////////////
//                        To-Do List                                 //
///////////////////////////////////////////////////////////////////////
/*

1. Change the styles to be prettier
2. Animals
3. Allow inputs for the names
4. Create weak a1
5. Create strong a1
6. Play a sound

*/
///////////////////////////////////////////////////////////////////////
//                           Variables                               //
///////////////////////////////////////////////////////////////////////

// Assinging variables to the 9 div squares
var a1 = document.getElementById('a1');
var a2 = document.getElementById('a2');
var a3 = document.getElementById('a3');
var b1 = document.getElementById('b1');
var b2 = document.getElementById('b2');
var b3 = document.getElementById('b3');
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');
var square = document.getElementsByClassName('square');

// Assigning variables to the div squares text
var ha1 = document.getElementById('ha1');
var ha2 = document.getElementById('ha2');
var ha3 = document.getElementById('ha3');
var hb1 = document.getElementById('hb1');
var hb2 = document.getElementById('hb2');
var hb3 = document.getElementById('hb3');
var hc1 = document.getElementById('hc1');
var hc2 = document.getElementById('hc2');
var hc3 = document.getElementById('hc3');
var h4 = document.getElementsByTagName('h4');

// Sets up variables for buttons and text IDs
var player1 = document.getElementById('player1');
var player2 = document.getElementById('player2');
var middle = document.getElementById('middle');
var button = document.querySelector('button');

// Turn counter, counters for each win posibility, and an array of
// counter values.
var clickCounter = 0;
var rowA = 0;
var rowB = 0;
var rowC = 0;
var col1 = 0;
var col2 = 0;
var col3 = 0;
var diaA1 = 0;
var diaA3 = 0;


///////////////////////////////////////////////////////////////////////
//                            Functions                              //
///////////////////////////////////////////////////////////////////////

// This function sees who's turn it is
function isPlayer1Turn(){
  if(clickCounter % 2 === 0){
    player2.style.textDecoration = "underline";
    player1.style.textDecoration = "none";
    return true;
  } else {
    player1.style.textDecoration = "underline";
    player2.style.textDecoration = "none";
    return false;
  }
}

// This function checks if there's a winner or if it's a Cat's game.
// If there is one, it prints the winner or tie and ends the game.
var gameOver = false;
function winnerCheck(){
  if(rowA === -3 || rowB === -3 || rowC === -3 || col1 === -3 || col2 === -3 || col3 === -3 || diaA1 === -3 || diaA3 === -3){
    middle.innerHTML = 'Winner: Player 2!';
    middle.style.color = "#E05151";
    gameOver = true;
    messageSetup();
  } else if(rowA === 3 || rowB === 3 || rowC === 3 || col1 === 3 || col2 === 3 || col3 === 3 || diaA1 === 3 || diaA3 === 3){
    middle.innerHTML = 'Winner: Player 1!';
    middle.style.color = "#75A3D1";
    gameOver = true;
    messageSetup();
  } else if (clickCounter === 9){
    middle.innerHTML = 'Both of you need to try harder ...';
    gameOver = true;
    messageSetup();
  }
}

// This function sets up the game message
function messageSetup(){
  if(gameOver){
    player1.innerHTML = "";
    player2.innerHTML = "";
  } else {
    player1.innerHTML = "Player 1";
    player2.innerHTML = "Player 2";
    middle.innerHTML = "&nbsp&nbsp&nbsp&nbsp vs &nbsp&nbsp&nbsp&nbsp"
  }
}

///////////////////////////////////////////////////////////////////////
//                          Event Listeners                          //
///////////////////////////////////////////////////////////////////////

// This code listens for the reset button to be clicked and executes a
// function that resets the class of all the 'squares' to initial state,
// sets all the win counters to 0, and resets the game message.
// If time, make the counters 0 with a for-loop.
button.addEventListener('click', function(){
  clickCounter = 0;
  rowA = 0;
  rowB = 0;
  rowC = 0;
  col1 = 0;
  col2 = 0;
  col3 = 0;
  diaA1 = 0;
  diaA3 = 0;
  gameOver = false;
  messageSetup();
  player1.style.textDecoration = "underline";
  player2.style.textDecoration = "none";
  middle.style.color = "white";
  for(i=0; i<square.length; i++){
    square[i].className = "square";
    h4[i].innerHTML = ""
  }
})


// This is not efficient at all.  Fix later if time.
// Line 1 listens for a click and executes the function.
// The first if/then only executes the second loop if the square has the
//    starting class.
// The second if/then changes the class to 'x' or 'y' depending on the
//    turn and changes the value of its associated winPossibility vars.
// The function lastly increments the counter and checks for a winner.
a1.addEventListener('click', function(){
  if(gameOver){
    console.log('The game is over.  QUIT CLICKIN');
  } else if(a1.className != 'square'){
    console.log('already clicked');
  } else {
    if (isPlayer1Turn()){
      a1.className = 'square x';
      ha1.innerHTML = 'X';
      rowA ++; col1 ++; diaA1 ++;
    } else {
      a1.className = 'square o';
      ha1.innerHTML = 'O';
      rowA --; col1 --; diaA1 --;
    }
    clickCounter ++;
    winnerCheck();
    easyAI();
  }
})
a2.addEventListener('click', function(){
  if(gameOver){
    console.log('The game is over.  QUIT CLICKIN');
  } else if(a2.className != 'square'){
    console.log('already clicked');
  } else {
    if(isPlayer1Turn()){
      a2.className = 'square x';
      ha2.innerHTML = 'X';
      rowA ++; col2 ++;
    } else {
      a2.className = 'square o';
      ha2.innerHTML = 'O';
      rowA --; col2 --;
    }
    clickCounter ++;
    winnerCheck();
    easyAI();
  }
})
a3.addEventListener('click', function(){
  if(gameOver){
    console.log('The game is over.  QUIT CLICKIN');
  } else if(a3.className != 'square'){
    console.log('already clicked');
  } else {
    if(isPlayer1Turn()){
      a3.className = 'square x';
      ha3.innerHTML = 'X';
      rowA ++; col3 ++; diaA3 ++;
    } else {
      a3.className = 'square o';
      ha3.innerHTML = 'O';
      rowA --; col3 --; diaA3 --;
    }
    clickCounter ++;
    winnerCheck();
  }
})
b1.addEventListener('click', function(){
  if(gameOver){
    console.log('The game is over.  QUIT CLICKIN');
  } else if(b1.className != 'square'){
    console.log('already clicked');
  } else {
    if(isPlayer1Turn()){
      b1.className = 'square x';
      hb1.innerHTML = 'X';
      rowB ++; col1 ++;
    } else {
      b1.className = 'square o';
      hb1.innerHTML = 'O';
      rowB --; col1 --;
    }
    clickCounter ++;
    winnerCheck();
  }
})
b2.addEventListener('click', function(){
  if(gameOver){
    console.log('The game is over.  QUIT CLICKIN');
  } else if(b2.className != 'square'){
    console.log('already clicked');
  } else {
    if(isPlayer1Turn()){
      b2.className = 'square x';
      hb2.innerHTML = 'X';
      rowB ++; col2 ++; diaA1 ++; diaA3 ++;
    } else {
      b2.className = 'square o';
      hb2.innerHTML = 'O';
      rowB --; col2 --; diaA1 --; diaA3 --;
    }
    clickCounter ++;
    winnerCheck();
  }
})
b3.addEventListener('click', function(){
  if(gameOver){
    console.log('The game is over.  QUIT CLICKIN');
  } else if(b3.className != 'square'){
    console.log('already clicked');
  } else {
    if(isPlayer1Turn()){
      b3.className = 'square x';
      hb3.innerHTML = 'X';
      rowB ++; col3 ++;
    } else {
      b3.className = 'square o';
      hb3.innerHTML = 'O';
      rowB --; col3 --;
    }
    clickCounter ++;
    winnerCheck();
  }
})
c1.addEventListener('click', function(){
  if(gameOver){
    console.log('The game is over.  QUIT CLICKIN');
  } else if(c1.className != 'square'){
    console.log('already clicked');
  } else {
    if(isPlayer1Turn()){
      c1.className = 'square x';
      hc1.innerHTML = 'X';
      rowC ++; col1 ++; diaA3 ++;
    } else {
      c1.className = 'square o';
      hc1.innerHTML = 'O';
      rowC --; col1 --; diaA3 --;
    }
    clickCounter ++;
    winnerCheck();
  }
})
c2.addEventListener('click', function(){
  if(gameOver){
    console.log('The game is over.  QUIT CLICKIN');
  } else if(c2.className != 'square'){
    console.log('already clicked');
  } else {
    if(isPlayer1Turn()){
      c2.className = 'square x';
      hc2.innerHTML = 'X';
      rowC ++; col2 ++;
    } else {
      c2.className = 'square o';
      hc2.innerHTML = 'O';
      rowC --; col2 --;
    }
    clickCounter ++;
    winnerCheck();
  }
})
c3.addEventListener('click', function(){
  if(gameOver){
    console.log('The game is over.  QUIT CLICKIN');
  } else if(c3.className != 'square'){
    console.log('already clicked');
  } else {
    if(isPlayer1Turn()){
      c3.className = 'square x';
      hc3.innerHTML = 'X';
      rowC ++; col3 ++; diaA1 ++;
    } else {
      c3.className = 'square o';
      hc3.innerHTML = 'O';
      rowC --; col3 --; diaA1 --;
    }
    clickCounter ++;
    winnerCheck();
  }
})

///////////////////////////////////////////////////////////////////////
//                             Weak A.I.                             //
///////////////////////////////////////////////////////////////////////

function easyAI(){
  var noMove = true;
  while(noMove){
    var possMove = square[ranZeroToEight()];
    console.log(possMove);
    if(possMove.className === 'square'){
      console.log("success!");
      noMove = false;
    }
  }
}

function ranZeroToEight(){
  return Math.floor(Math.random() * 9);
}








/*
// AI variables
var aiMoves = square;
var divideBy = square.length;

//This shuffles the aiMoves array
function shuffle() {
  var currentIndex = aiMoves.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = aiMoves[currentIndex];
    aiMoves[currentIndex] = aiMoves[randomIndex];
    aiMoves[randomIndex] = temporaryValue;
  }

  return aiMoves;
}

// AI runs if its Player 2's turn
function easyAI(){
  if(clickCounter % 2 === 1){
    divideBy = divideBy;
  }
}
//easyAI takes function that shuffles the square array and goes through
//the array in order looking for one with a 'square class'.  If it's
//square, it plays that one.






*/



// Picks a random move
/*function randomMove(numOfPieces){
  var randomNum = Math.floor(Math.random * numOfPieces);
  switch(randomNum){
    case 0:
      return 0;
      console.log("hi");
      break;
    case 1:
      return 1;
      console.log("1");
      break;
    case 2:
      return 2;
      console.log("2");
      break;
    case 3:
      return 3;
      console.log("3");
      break;
    case 4:
      return 4;
      console.log("4");
      break;
    case 5:
      return 5;
      console.log("5");
      break;
    case 6:
      return 6;
      console.log("6");
      break;
    case 7:
      return 7;
      console.log("7");
      break;
  }
}
*/

