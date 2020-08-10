/*----- constants -----*/
const MAX_GUESSES = 42;

const PLAYER_COLORS = {
    '-1': 'purple',
    '1': 'grey',
    'null': 'transparent'
};

// const WIN_COM = 

/*----- app's state (variables) -----*/
let board;
let turn;
let winner;


/*----- cached element references -----*/
let gameBoardEl = document.querySelector('table')
let gameBoardCell = document.querySelectorAll('td div')

// /*----- event listeners -----*/
document.getElementById('drop-buttons').addEventListener('click', handleDropClick);

/*----- functions -----*/

init();

function init() {
    board = [
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null]
    ];
    turn = 1;
    winner = null; 
    console.log(board)
    render();
}

// loop down that array of array, click on button to select array 

function handleDropCoin() {
    // Determine the rowIdx by finding the first null in the column array.
    // when you click drop, each button should be associated to an array 
    // it should loop through the array and get to the first time it hits null
    // fill it 
    // if column is full, it'll be like nope 
    // figure out based on which button you click, associate it to an array [0] [1] etc.
    // another function that's gonna check winner
    // ?for(let i = 6; i > -1; i--);
    // if (i === null) return;?
    // this one basically needs to run through the column and figure out what's empty
    // or what's filled 
    // let column = board[i]
    // for (let i = 0; i < board.length -1; i--) {
        // console.log(board[0][1]);
    // }
}

function handleDropClick(evt) {
    // have this loop through the drop coin function. 
    // if button a is clicked loop through array a 
    // parameter it takes is the button that was click 
    // buttons need to click. need to have a column idx 
    // to determine the column clicked
    // this one needs to assign 
    const colIdx = parseInt(evt.target.id.replace('c', ''));
    if (isNaN(colIdx) || winner) return;
    // update all impacted state 
    let rowIdx = board[colIdx].indexOf(null);
    if (rowIdx === -1) return;
    board[colIdx][rowIdx] = turn;
    turn *= -1;
    
    
    // invoke render 
    render();
}


function checkWinner() {
    // starting at the left-most column, you never
    // checkCallWin function, you know which col your checking and idx of column
    // think in terms of offset, extracting four values 
    // rowIdx cellIdx, + colIdx + 1 to move over cell to right (as long as you leave row idx the saem)
    // board[colIdx] +1
    // check diagonally up: 
    // (this is sep function (check updiag)) add four values together 
    // Math.abs(board[colIdx][rowIdx] + board[colIdx + 1][rowIdx + 1] + board[colIdx + 2][rowIdx + 2] + board[colIdx + 3][rowIdx +3]) === 4 
    // board[colIdx][rowIdx]
}

function render() {
    // For rendering, use a nested forEach, where the outer forEach iterates 
    // over the column arrays and the inner forEach iterates over each row within 
    // the current column.  Then, you can use the indexes of the two forEach's to select the 
    // proper DOM element to style  by using getElementById if you put id's on the elements 
    // like "c3r2" which would be the element for column 3 row 2.
    // render board
    board.forEach(function(colArr, colIdx) {
        colArr.forEach(function(cell, rowIdx) {
            // cell on line 96 holds value of the state
            // cell holds the null/1/-1 value 
            const cellEl = document.getElementById(`c${colIdx}r${rowIdx}`);
            cellEl.style.backgroundColor = PLAYER_COLORS[cell];
        });
        // how to go through iteration to see if corrseponding color array is full, set diplay to 
        // hide the div/button if column is full (ternary to hide or show) style.visibility ('hidden' or 'visible')
        document.getElementById(`c${colIdx}`).style.visibility = colArr.includes(null) ? 'visible' : 'hidden';
    });
}





















































// // /*----- constants -----*/
// const MAX_GUESSES = 42;
// console.log(MAX_GUESSES)

// const PLAYERS = {
//     '-1': 'blue',
//     '1': 'red',
//     'null': 'white'
// };

// const BOARD_WIDTH = 7;

// // /*----- app's state (variables) -----*/
// let board; 
// let turn; 
// let winner; 

// console.log(board, turn, winner)

// // /*----- cached element references -----*/
// let gameBoardEl = document.querySelector('.board')


// // /*----- event listeners -----*/
// document.querySelector('.board').addEventListener('click', handleClick)


// // /*----- functions -----*/

// function init() {
//     board = new Array(42).fill(null)
//     render();
// }

// function render() {
    
// }

// function handleClick(evt) {
// // let index= (means we're clicking on id that's in HTML) we made a variable for  
// // the target (this grabs the gamesquars too) of all the things in the gameboard,
// // we only want the id (of the sqaures)
//     let index = parseInt(evt.target.id);
//     dropCoin(index); 
// }

// function dropCoin(idx) {
//     let playerChoice = idx;
// // in this while loop we are grabbing the index the player chose (by clicking on it)
// // and we're saying that while the player choice is board.length (right now it's 42)
// // player choice will = that index + 7 until it can't go past the board
//     while (playerChoice + BOARD_WIDTH < board.length) {
//         playerChoice = playerChoice + BOARD_WIDTH 
// console.log(playerChoice)
//     } 
// // next we need to change the value of that index to -1 or 1 after it's been selected
// console.log(playerChoice)
// }

// init();


// console.log(init)