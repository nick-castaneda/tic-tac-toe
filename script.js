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

// Sets up variables for each of the win posibilities.
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

//This function sees who's turn it is
var clickCounter = 0;
function isPlayer1Turn(){
  if(clickCounter % 2 === 0){
    return true;
  } else {
    return false;
  }
}

function winnerCheck(){
  if(rowA === 3 || rowB === 3 || rowC === 3 || col1 === 3 || col2 === 3 || col3 === 3 || diaA1 === 3 || diaA3 === 3){
    document.getElementById('winner_text').innerHTML = 'Player 1';
  } else if (rowA === -3 || rowB === -3 || rowC === -3 || col1 === -3 || col2 === -3 || col3 === -3 || diaA1 === -3 || diaA3 === -3){
    document.getElementById('winner_text').innerHTML = 'Player 2';
  }
}

///////////////////////////////////////////////////////////////////////
//                          Event Listeners                          //
///////////////////////////////////////////////////////////////////////

// This is not efficient at all.  Fix later if time.
// Line 1 listens for a click and executes the function.
// The first if/then only executes the second loop if the square has the
//    starting class.
// The second if/then changes the class to 'x' or 'y' depending on the
//    turn and changes the value of its associated winPossibility vars.
// The function lastly increments the counter and checks for a winner.

a1.addEventListener('click', function(){
  if(a1.className != 'square'){
    alert('already clicked');
  } else {
    if (isPlayer1Turn()){
      a1.className = 'square x';
      rowA ++; col1 ++; diaA1 ++;
    } else {
      a1.className = 'square o';
      rowA --; col1 --; diaA1 --;
    }
    clickCounter ++;
    winnerCheck();
  }
})
a2.addEventListener('click', function(){
  if(a2.className != 'square'){
    alert('already clicked');
  } else {
    if(isPlayer1Turn()){
      a2.className = 'square x';
      rowA ++; col2 ++;
    } else {
      a2.className = 'square o';
      rowA --; col2 --;
    }
    clickCounter ++;
    winnerCheck();
  }
})
a3.addEventListener('click', function(){
  if(a3.className != 'square'){
    alert('already clicked');
  } else {
    if(isPlayer1Turn()){
      a3.className = 'square x';
      rowA ++; col3 ++; diaA3 ++;
    } else {
      a3.className = 'square o';
      rowA --; col3 --; diaA3 --;
    }
    clickCounter ++;
    winnerCheck();
  }
})
b1.addEventListener('click', function(){
  if(b1.className != 'square'){
    alert('already clicked');
  } else {
    if(isPlayer1Turn()){
      b1.className = 'square x';
      rowB ++; col1 ++;
    } else {
      b1.className = 'square o';
      rowB --; col1 --;
    }
    clickCounter ++;
    winnerCheck();
  }
})
b2.addEventListener('click', function(){
  if(b2.className != 'square'){
    alert('already clicked');
  } else {
    if(isPlayer1Turn()){
      b2.className = 'square x';
      rowB ++; col2 ++; diaA1 ++; diaA3 ++;
    } else {
      b2.className = 'square o';
      rowB --; col2 --; diaA1 --; diaA3 --;
    }
    clickCounter ++;
    winnerCheck();
  }
})
b3.addEventListener('click', function(){
  if(b3.className != 'square'){
      alert('already clicked');
    } else {
    if(isPlayer1Turn()){
      b3.className = 'square x';
      rowB ++; col3 ++;
    } else {
      b3.className = 'square o';
      rowB --; col3 --;
    }
    clickCounter ++;
    winnerCheck();
  }
})
c1.addEventListener('click', function(){
  if(c1.className != 'square'){
    alert('already clicked');
  } else {
    if(isPlayer1Turn()){
      c1.className = 'square x';
      rowC ++; col1 ++; diaA3 ++;
    } else {
      c1.className = 'square o';
      rowC --; col1 --; diaA3 --;
    }
    clickCounter ++;
    winnerCheck();
  }
})
c2.addEventListener('click', function(){
  if(c2.className != 'square'){
    alert('already clicked');
  } else {
    if(isPlayer1Turn()){
      c2.className = 'square x';
      rowC ++; col2 ++;
    } else {
      c2.className = 'square o';
      rowC --; col2 --;
    }
    clickCounter ++;
    winnerCheck();
  }
})
c3.addEventListener('click', function(){
  if(c3.className != 'square'){
    alert('already clicked');
  } else {
    if(isPlayer1Turn()){
      c3.className = 'square x';
      rowC ++; col3 ++; diaA1 ++;
    } else {
      c3.className = 'square o';
      rowC --; col3 --; diaA1 --;
    }
    clickCounter ++;
    winnerCheck();
  }
})
