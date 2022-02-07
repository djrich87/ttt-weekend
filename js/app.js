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
const player0 = -1
const playerX = 1
let numOfTurns


/*------------------------ Cached Element References ------------------------*/
const boardSquares = document.querySelector(".board")
console.log(boardSquares);
const message = document.getElementById("message")

// const winnerLoser = document.querySelector("#winnerloser")
// console.log(winnerloser)
//Need a way to update board squares in the cached references. IN your render function, use squares - an array, to update board squares accordingly.

const resetBtn = document.getElementById('resetBtn')

/*----------------------------- Event Listeners -----------------------------*/
boardSquares.addEventListener("click", handleClick);


/*-------------------------------- Functions --------------------------------*/
function  handleClick(event) {
  //console.log(event.target.id);
  //change the state of the squares in the handleClick function
  //handle click function is running 
  
  const id = event.target.id.replace('sq','')
  if (squares[id] === null && winner === null){
    squares[id] = turn
    turn *= -1
    numOfTurns += 1
    console.log(squares)
    render()
    getWinner()
  } 
}

init();

function init(){

squares = [
  null, null, null,
  null, null, null,
  null, null, null]
console.log(squares)  //these nulls refer to the game board in order

turn = 1
winner = null;
numOfTurns = 0

message.innerText = ''
render()
}


function render() {

  for (let i = 0; i < squares.length; i++){
  // console.log(squares[i])
    if (squares[i] === 1){
    boardSquares.children[i].textContent = 'X'
    message.textContent = 'Turn: 0'
    } else if 
    (squares[i] === -1) {
    boardSquares.children[i].textContent = '0'
    message.textContent = 'Turn: X'
    } else {
    boardSquares.children[i].textContent = ""
    }
  }
}

// function whoseTurn(){
//   turn *= -1
//  if (turn === 1){
//  message.textContent = 'Turn: X'
//   }
//   else if (turn === -1){
//     message.textContent = 'Turn: O'
//   }
// }

resetBtn.addEventListener('click', init)

  // render()


function getWinner(){
  for(let i = 0; i < winningCombos.length; i++){
  //const winner = winningCombos[i]; 
  // console.log(`This is instance ${i}`)
 const a = winningCombos[i][0]
 const b = winningCombos[i][1]
 const c = winningCombos[i][2]
//  console.log(a, b, c)
//   console.log(`This is the third value`, winningCombos[i][2])
    if (squares[a] + squares[b] + squares[c] === 3){
      console.log('X wins')
       message.textContent = 'X wins';
       winner = 'X'
    } else if (squares[a] + squares[b] + squares[c] === -3){
      console.log('0 wins')
      message.textContent = '0 wins';
      winner = '0'
    }
      
  }  
  if(numOfTurns === 9 && winner === null){
    console.log('Tie')
    message.textContent = 'Tie';
  }
  
}
init()
