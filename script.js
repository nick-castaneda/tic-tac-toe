//Here I'm going to assign variables to the nine squares.
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

//This code listens for clicks, counts them, and changes the square class.
var clickCounter = 0
for(i=0; i<square.length; i++){
  square[i].addEventListener('click', function(){
    if(whosTurn() === "x"){
      alert('Hello player1!');
      square[i].addClass('x');
    } else if (whosTurn() === "o"){
      alert('Hello player2!');
      square[i].addClass('o');
    }
    clickCounter ++;
    });
}

//This function sees who's turn it is
var whosTurn = function(){
  var turn = "";
  if(clickCounter % 2 === 0){
    turn = "x";
  } else {
    turn = "o";
  }
  return turn;
}






console.log(clickCounter);
