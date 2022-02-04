/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let squares, winner, turn

// const player0 = -1
// const playerX = 1
// let winner = null
// let tie = 'T'

/*------------------------ Cached Element References ------------------------*/
const boardSquares = document.querySelector(".board")
// console.log(boardSquares);
// need a way to update board squares in cached reference
// use squares an array to update board sqaures accordingly

/*----------------------------- Event Listeners -----------------------------*/
boardSquares.addEventListener("click", handleClick);
  // console.log()


/*-------------------------------- Functions --------------------------------*/

function  handleClick(event) {
  // console.log(event.target.id.replace('sq',''));
  //change the state of the squares in the handleClick function
  //string.slice- helps remove SQ
  //
  const id = event.target.id.replace('sq','') //
  squares[id]= 1
  console.log(squares)
}

/*----------------------------------------------------------------------------*/

init();
    // X 3.1

function init() {

  squares = [
    null, null, null,
    null, null, null,
    null, null, null];
console.log(squares)
  // X 3.2.1
  // 9 elements "map" to each squarfe: [0] = top-left sqaure
  // 1] = top-middle square... [8] = bottom right square
  // turn = {
  //   '1': {
  //     name: 'X'
  //   }, '2': {
  //     name: '0'
  //   }
  // }
// 3.2.2

winner = null;
// 3.2.3

render ()

}
//3.3.3

function render () {
  for (let i = 0; i < squares.length; i++) {
    console.log(squares[i])
    // boardSquares = document.querySelector.replace APPLY THIS TO THE PROCESS TO HELP WITH THE SQUARE ARRAY
    // adjust 
  }
 


}