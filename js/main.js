/*----- constants -----*/
const MAX_GUESSES = 42;

const PLAYER_COLORS = {
    '-1': 'black',
    '1': 'white',
    'null': 'transparent'
};

// const audio = new Audio('https://freesound.org/s/244656/');

/*----- app's state (variables) -----*/
let board;
let turn;
let winner;

/*----- cached element references -----*/
let message = document.querySelector('#msg')

// /*----- event listeners -----*/
document.querySelector('#reset').addEventListener('click', init);

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
    message.textContent = '';
    turn = 1;
    winner = null;
    document.getElementById('drop-buttons').addEventListener('click', handleDropClick);
    render();
}

console.log(message)

function handleDropClick(evt) {
    const colIdx = parseInt(evt.target.id.replace('c', ''));
    if (isNaN(colIdx) || winner) return;
    let rowIdx = board[colIdx].indexOf(null);
    if (rowIdx === -1) return;
    board[colIdx][rowIdx] = turn;

    if (horizWin() + vertWin() + diagUp() + diagDown()) {
        message.textContent = `Player ${turn < 0 ? 'Two' : 'One'} Wins!`;
        document.getElementById('drop-buttons').removeEventListener('click', handleDropClick);
    }
//     if (board.includes(null)) return null;
// // return 'T';

    turn *= -1;
    render();

}

function horizWin() {
    for (let colIdx = 0; colIdx < 4; colIdx++) {
        for (let rowIdx = 0; rowIdx < 6; rowIdx++) {
            if (Math.abs(board[colIdx][rowIdx] + board[colIdx + 1][rowIdx] + board[colIdx + 2][rowIdx] + board[colIdx + 3][rowIdx]) === 4) {
                return true
            }
        }
    }
    return false
};

function vertWin() {
    for (let rowIdx = 0; rowIdx < 4; rowIdx++) {
        for (let colIdx = 0; colIdx < 7; colIdx++) {
            if (Math.abs(board[colIdx][rowIdx] + board[colIdx][rowIdx + 1] + board[colIdx][rowIdx + 2] + board[colIdx][rowIdx + 3]) === 4) {
                return true;
            }
        }
    }
    return false
};

function diagUp() {
    for (let colIdx = 0; colIdx < 4; colIdx++) {
        for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
            if (Math.abs(board[colIdx][rowIdx] + board[colIdx + 1][rowIdx + 1] + board[colIdx + 2][rowIdx + 2] + board[colIdx + 3][rowIdx + 3]) === 4) {
                return true;
            }
        }
    }
    return false
};

function diagDown() {
    for (let colIdx = 0; colIdx < 4; colIdx++) {
        for (let rowIdx = 5; rowIdx > 2; rowIdx--) {
            if (Math.abs(board[colIdx][rowIdx] + board[colIdx + 1][rowIdx - 1] + board[colIdx + 2][rowIdx - 2] + board[colIdx + 3][rowIdx - 3]) === 4) {
                return true;
            }
        }
    }
    return false
}

function render() {
    board.forEach(function (colArr, colIdx) {
        colArr.forEach(function (cell, rowIdx) {
            const cellEl = document.getElementById(`c${colIdx}r${rowIdx}`);
            cellEl.style.backgroundColor = PLAYER_COLORS[cell];
        });
        document.getElementById(`c${colIdx}`).style.visibility = colArr.includes(null) ? 'visible' : 'hidden';
    });
}
