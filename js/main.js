/*----- constants -----*/
const MAX_GUESSES = 42;

const PLAYERS = {
    '-1': 'blue',
    '1': 'red',
    'null': 'white'
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
document.querySelector('#c1').addEventListener('click', handleDropCoin);
document.querySelector('#c2').addEventListener('click', handleDropCoin);
document.querySelector('#c3').addEventListener('click', handleDropCoin);
document.querySelector('#c4').addEventListener('click', handleDropCoin);
document.querySelector('#c5').addEventListener('click', handleDropCoin);
document.querySelector('#c6').addEventListener('click', handleDropCoin);
document.querySelector('#c7').addEventListener('click', handleDropCoin);
// I want the column to be evt.target.id (c0,c1,c2, etc.)

/*----- functions -----*/

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

function handleClick(evt) {
    // have this loop through the drop coin function. 
    // if button a is clicked loop through array a 
    // parameter it takes is the button that was click 
    // buttons need to click. need to have a column idx 
    // to determine the column clicked
    // this one needs to assign 
    const idx = parseInt(evt.target.id.replace('sq', ''));
    console.log(idx)
}


function checkWinner() {

}

function render() {
    // For rendering, use a nested forEach, where the outer forEach iterates 
    // over the column arrays and the inner forEach iterates over each row within 
    // the current column.  Then, you can use the indexes of the two forEach's to select the 
    // proper DOM element to style  by using getElementById if you put id's on the elements 
    // like "c3r2" which would be the element for column 3 row 2.

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