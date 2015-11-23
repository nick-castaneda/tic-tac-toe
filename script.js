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
    if(compOn % 3 === 0){
      middle.innerHTML = 'Winner: Player 2!';
    } else {
      middle.innerHTML = 'Winner: Computer!'
    }
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
  compOn = 0;
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
    compTurn();
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
    compTurn();
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
    compTurn();
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
    compTurn();
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
    compTurn();
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
    compTurn();
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
    compTurn();
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
    compTurn();
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
    compTurn();
  }
})

///////////////////////////////////////////////////////////////////////
//                     Computer Player Functions                     //
///////////////////////////////////////////////////////////////////////

// Computer variables
var compOn = 0;

// Sets up event listener to turn on compAI
player2.addEventListener('click', function(){
  compOn ++;
  if(compOn % 3 === 0){
    player2.innerHTML = 'Player 2';
  } else if(compOn % 3 === 1){
    player2.innerHTML = 'Easy Computer';
  } else {
    player2.innerHTML = 'Hard Computer'
  }
})

// Picks a random number from 0 to 8.
function ranZeroToEight(){
  return Math.floor(Math.random() * 9);
}

// This switch allows the easy comp and hard comp to move.
function compTurn(){
  if(compOn % 3 === 1){
    easyComp();
  } else if (compOn % 3 === 2){
    hardComp();
  }
}

// Easy Computer function: The if statement checks if the easy computer
// is on; noMove is declared, which tracks whether or not the comp has a
// move yet; the while loop only works if the comp doesn't have a move
// and if there has been less than 8 moves; inside the while-loop the
// randomFunction picks a random square and it is set to the 'possMove'
// var; if 'possMove' still has the starting class, the switch runs a
// click simulation on the respective square.
function easyComp(){
  var noMove = true;
  while(noMove && clickCounter < 8){
    var possMove = square[ranZeroToEight()];
    if(possMove.className === 'square'){
      switch(possMove){
        case a1:
          simA1(); break;
        case a2:
          simA2(); break;
        case a3:
          simA3(); break;
        case b1:
          simB1(); break;
        case b2:
          simB2(); break;
        case b3:
          simB3(); break;
        case c1:
          simC1(); break;
        case c2:
          simC2(); break;
        case c3:
          simC3(); break;
      }
      noMove = false;
    }
  }
}

// Hard Computer function:
function hardComp(){
  var nomove = true;
  while(nomove && clickCounter < 8){
    if(rowA === 2 || rowA === -2){
      if(a1.className === 'square'){
        simA1(); nomove = false;
      } else if (a2.className === 'square'){
        simA2(); nomove = false;
      } else{
        simA3(); nomove = false;
      }
    } else if(rowB === 2 || rowB === -2){
      if(b1.className === 'square'){
        simB1(); nomove = false;
      } else if (b2.className === 'square'){
        simB2(); nomove = false;
      } else{
        simB3(); nomove = false;
      }
    } else if(rowC === 2 || rowC === -2){
      if(c1.className === 'square'){
        simC1(); nomove = false;
      } else if (c2.className === 'square'){
        simC2(); nomove = false;
      } else{
        simC3(); nomove = false;
      }
    } else if(col1 === 2 || col1 === -2){
      if(a1.className === 'square'){
        simA1(); nomove = false;
      } else if (b1.className === 'square'){
        simB1(); nomove = false;
      } else{
        simC1(); nomove = false;
      }
    } else if(col2 === 2 || col2 === -2){
      if(a2.className === 'square'){
        simA2(); nomove = false;
      } else if (b2.className === 'square'){
        simB2(); nomove = false;
      } else{
        simC2(); nomove = false;
      }
    } else if(col3 === 2 || col3 === -2){
      if(a3.className === 'square'){
        simA3(); nomove = false;
      } else if (b3.className === 'square'){
        simB3(); nomove = false;
      } else{
        simC3(); nomove = false;
      }
    } else if(diaA1 === 2 || diaA1 === -2){
      if(a1.className === 'square'){
        simA1(); nomove = false;
      } else if (b2.className === 'square'){
        simB2(); nomove = false;
      } else{
        simC3(); nomove = false;
      }
    } else if(diaA3 === 2 || diaA3 === -2){
      if(a3.className === 'square'){
        simA3(); nomove = false;
      } else if (b2.className === 'square'){
        simB2(); nomove = false;
      } else{
        simC1(); nomove = false;
      }
    } else if(b2.className === 'square'){
      simB2(); nomove = false;
    } else if(a1.className === 'square'){
      simA1(); nomove = false;
    } else{
      easyComp(); nomove = false;
    }
  }
}

// These Simulated click functions identical to the click functions aside
// from the a1 function
function simA1(){
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
  }
}
function simA2(){
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
  }
}
function simA3(){
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
}
function simB1(){
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
}
function simB2(){
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
}
function simB3(){
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
}
function simC1(){
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
}
function simC2(){
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
}
function simC3(){
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
}


// Issues: Hard AI can't tell if there


