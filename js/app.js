/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let squares, winner, turn
// let playerTurn = [o,x]
// let gameOutcome = [tie, winner, loser]
const player0 = -1
const playerX = 1
//let winner = null

/*------------------------ Cached Element References ------------------------*/
const boardSquares = document.querySelector(".board")
console.log(boardSquares);
//Need a way to update board squares in the cached references. IN your render function, use squares - an array, to update board squares accordingly.

/*----------------------------- Event Listeners -----------------------------*/
boardSquares.addEventListener("click", handleClick);


/*-------------------------------- Functions --------------------------------*/
function  handleClick(event) {
  //console.log(event.target.id);
  //change the state of the squares in the handleClick function
  //string.slice- helps remove SQ
  //
  const id = event.target.id.replace('sq','')
  squares[id] = 1
  console.log(squares)
  if(squares === 1){
    return X
  }
  render()
}

init();

function init(){

squares = [
  null, null, null,
  null, null, null,
  null, null, null]
console.log(squares)  //these nulls refer to the game board in order

  
winner = null;

render()

}

function render() {

  for (let i = 0; i < squares.length; i++){
  // console.log(squares[i])
  if (squares[i] === 1){
    boardSquares.children[i].textContent = 'x'
  } else {
    (squares[i] != 1)
    boardSquares.children[i].textContent = '0'
  } 
  //else (boardSquares.children[i].textContent = '' )
    //if else statement could be good here
    //if the condition is true, then print a value to the board
}
}