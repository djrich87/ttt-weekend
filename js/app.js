/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6 ,7, 8],
  [0, 3, 5],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]


/*---------------------------- Variables (state) ----------------------------*/
let squares, winner, turn
// let playerTurn = [o,x]
// let gameOutcome = [tie, winner, loser]
const player0 = -1
const playerX = 1

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
  } else if
    (squares === -1){
      return 0
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
    } else if 
    (squares[i] === -1) {
    boardSquares.children[i].textContent = '0'
    } else {
    boardSquares.children[i].textContent = ""
    }
  }
}


// if  (squares[i] === null)
// boardSquares.children[i].textContent = ''
//   else (boardSquares.children[i].textContent = '' )
    // if else statement could be good here
    //if the condition is true, then print a value to the board

