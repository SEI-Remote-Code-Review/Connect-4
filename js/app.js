// // Create an html template and copy over css starter from course supplement page.

// // Create html elements: h1, h2, 42divs, and reset button.

//// Create a grid in css for chips to be shown in. Similar to tic tac toe, but expanded to a 6row and 7 column grid.
//// grid-column: repeat (7, )

// // State variables in JS.
////     let winner, playerTurn, boardArray

// // Add cached elements References.
// //div ALL squares  
// //this will be used to determine winner
// //h2 message 
// // init () message will say click a square to put first chip
// // message will then tell whose players turn it is 

// // Add event listeners for button clicks for replay button and  handleClick events.
//   // Replay -- on click return game state to init () state
//   // handleClick -- target evt.target.id (div squares)

// write stated functions (handleclick and init)
//dont write inside fuctions yet

// console.log everything so far to make sure it's working.

//// Add inital state function and add necessary variables. 
//    // board array [null, null, etc]
//    // winner = null
//    // reset button = hidden
//    //render()
////player turn = -1 (player 1)

// console.log

// Add render function
// iterate over the boardarray and change the html div text to show which squares are who's
// State of game :
// Winner, tie(unlikely), and whose turn

//console.log to make sure game renders all necessary squares

// write handleClick function
//change square index to show whose clicked square (1 or -1)
//remove the hidden attribute of the replay button
// determine whose turn it is 
//player 1 or -1
//check for winner with a winning function
//render() at the end of the handleClick function

// Define winning combinations.
// there are a lot of winning combos
//explore winning combos using a objects array to save time
//or hard code (not advised) this will be very time consuming



// Possibly use another js file and import this info.
// Add a winner function to determine if someone has won.
// If there is a winner,  style with confetti.
// Confetti colors to mimic winners colors.
// Add sound effects to column clicks and winner clicks. 
// Add a favicon of something cool.
// Add dark mode with optional neon lit chips, buttons, and game board.
// Optional - implement a function that will allow a powerup ability.
// 1x powerup chance per person. 
// Swap colors of a single chip if successful.
// Success will be determined with a Math.floor(Math.random().
// Optional -  implement an animation that will show the chips fall from the top once the players click the column they want.
/**-------------------- constants ---------------------*/
const winningCombos = [
  //Horizontal winning combos (Example: -- )
  [0, 1, 2, 3], [1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6],
  [7, 8, 9, 10], [8, 9, 10, 11], [9, 10, 11, 12], [10, 11, 12, 13],
  [14, 15, 16, 17], [15, 16, 17, 18], [16, 17, 18, 19], [17, 18, 19, 20],
  [21, 22, 23, 24], [22, 23, 24, 25], [23, 24, 25, 26], [24, 25, 26, 27], [28, 29, 30, 31], [29, 30, 31, 32], [30, 31, 32, 33], [31, 32, 33, 34],
  [35, 36, 37, 38], [36, 37, 38, 39], [37, 38, 39, 40], [38, 39, 40, 41],
  //Vertical winning combos (Example: | )
  [0, 7, 14, 21], [7, 14, 21, 28], [14, 21, 28, 35],
  [1, 8, 15, 22], [8, 15, 22, 29], [15, 22, 29, 36],
  [2, 9, 16, 23], [9, 16, 23, 30], [16, 23, 30, 37],
  [3, 10, 17, 24], [10, 17, 24, 31], [17, 24, 31, 38],
  [4, 11, 18, 25], [11, 18, 25, 32], [18, 25, 32, 39],
  [5, 12, 19, 26], [12, 19, 26, 33], [19, 26, 33, 40],
  [6, 13, 20, 27], [13, 20, 27, 34], [20, 27, 34, 41],
  //Diagnal winning combos (Example: \ ) 
  [14, 22, 30, 38],
  [7, 15, 23, 31], [15, 23, 31, 39],
  [0, 8, 16, 24], [8, 16, 24, 32], [16, 24, 32, 40],
  [1, 9, 17, 25], [9, 17, 25, 33], [17, 25, 33, 41],
  [2, 10, 18, 26], [10, 18, 26, 34],
  [3, 11, 19, 27],
  //Diagnal winning combos (Example: / ) 
  [3, 9, 15, 21],
  [4, 10, 16, 22], [10, 16, 22, 28],
  [5, 11, 17, 23], [11, 17, 23, 29], [17, 23, 29, 35],
  [6, 12, 18, 24], [12, 18, 24, 30], [18, 24, 30, 36],
  [13, 19, 25, 31], [19, 25, 31, 37],
  [20, 26, 32, 38]
]
// console.log(winningCombos);
/**------------------ Variables (state) -------------- */
let winner, playerTurn, boardArray, player_1, player_2 


/**-------------- Cached Element References ---------- */
let squares = document.querySelectorAll('.squares')
let messageEl = document.querySelector('#message')
let replay = document.querySelector('#replay-button')
let board = document.querySelector('.board')
// console.log(squares);
// console.log(messageEl);
// console.log(replay);

/**------------------- Event Listeners --------------- */
replay.addEventListener('click', init)


board.addEventListener('click', handleClick)


/**---------------------- Functions ------------------ */
init()

function init() {
  //make Message return to intial state 
  messageEl.textContent = 'Click a Square to Start'
  //make boardArray return to null in all its indexes
  boardArray = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
  // player_1 = []
  // player_2 = []


  //make winner null
  winner = null
  // player turn
  playerTurn = 1
  // hide replay button
  replay.setAttribute('hidden', true)

  render()
}

function render() {
  // iterate over the boardArray and change the html div text to show which squares are who's
  let squareColor
  boardArray.forEach((square, idx) => {

    if (square === 1) {
      squareColor = 'red'
    } else if (square === -1) {
      squareColor = 'blue'
    } else if (square === null) {
      squareColor = 'white'
    }
    // if (square - 7 === null) {
    //   square[idx - 7] = `${playerTurn === 1 ? '1' : '-1'}`
    //   square = null
    // } else {
    //   square = `${playerTurn === 1 ? '1' : '-1'}`
    // }
    squares[idx].style.backgroundColor = squareColor
    // console.log(square);
  })

  // State of game :
  // Winner, tie(unlikely), and whose turn
  if (!winner) {
    messageEl.textContent = `It is ${playerTurn === 1 ? "Player Red's" : "Player Blue's"} turn`
    messageEl.style.color = `${playerTurn === 1 ? "red" : "blue"}`
  } else if (winner === "T") {
    messageEl.textContent = "It's a Tie! That's unfortunate, but let's try again!"
    messageEl.style.color = 'black'
  } else {
    messageEl.textContent = `Congratulations, ${winner === 1 ? 'Red' : 'Blue'} Wins!!!!`
    messageEl.style.color = `${winner === 1 ? 'red' : 'blue'}`
  }
}

function handleClick(evt) {
  squares.forEach((square) => {
    let squareIndex = parseInt(evt.target.id.replace('sq', ''))
    // change square index to show whose clicked square (1 or -1)
    if (boardArray[squareIndex] === -1 || boardArray[squareIndex] === 1) {
      return
    } else if (winner !== null) {
      return
    }
    
    // console.log(squareIndex);
    //remove the hidden attribute of the replay button
    replay.removeAttribute('hidden')
    // determine whose turn it is 
    boardArray[squareIndex] = playerTurn
    //player 1 or -1
    playerTurn *= -1
    //check for winner with a winning function
    winner = getWinner()
    //render() at the end of the handleClick function
    render()
    // console.log(squareIndex)
  })
}


//Not sure if this code will work yet
// console.log(evt.target.id)
// if (evt.target !== board) {
//   const newTarget = evt.target.id

// }
function getWinner() {
  //this code is not creating a winner
  // if(playerTurn === -1)
  //   {
  //     player_2.push(squareIndex);
  //     console.log(player_2)
  //   }
  //   if(playerTurn === 1)
  //   {
  //     player_1.push(squareIndex);
  //     console.log(player_1);
  //   }

  for (let i = 0; i < winningCombos.length; i++) {
    if (Math.abs(boardArray[winningCombos[i][0]] + boardArray[winningCombos[i][1]] + boardArray[winningCombos[i][2]] + boardArray[winningCombos[i][3]]) === 4)
    {
      return boardArray[winningCombos[i][0]]
    } 
  }
    if (boardArray.includes(null)){
      return null
    } else {
      return 'T'
    }
    
  }


// function chipPosition() {
//   
//     if (square - 7 === null) {
//       square[idx - 7] = `${playerTurn === 1 ? '1' : '-1'}`
//       square = null
//     } else {
//       square = `${playerTurn === 1 ? '1' : '-1'}`
//     }
//   })
// }
// console.log(chipPosition()

