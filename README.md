# CONNECT FOUR

Render a 6x7 table
https://imgur.com/2Pee7hq 

Const variables
    Set player colors key to -1, 1, null

State variables
    board, turn, and winner, set to undefined

Initialize function: 
Set the values of the table array to null. In the initialize function, create an array of arrays. Set each index to null. Set the turn to 1. Winner set to null. We want to loop down the array of arrays and use an event listener to click on the buttons to select an array. 

HandleClick function:
Create a column index. Use parseInt to parse a string argument and return an integer in the second argument. This grabs the column button (which communicates to the render function). Set the area around the buttons to isNaN to stop the buttons from acting if not clicked. Define rowIdx as a let value. Board[i] gets the first index in column. Determine the rowIdx by finding the first null in the column array. When the player clicks the drop button, each button should be associated to an array. It should loop through the array and get to the first time it hits null. Fill it. If column is full, it'll stop adding coins. Update all impacted state. Need to remove the clicks when there's a winner. 

Winning logic:
https://imgur.com/rhqLb2F

Horizontal win: 
Need to loop through board start bottom left to right.
Add one to the column. Need to stop at row 6 and column 4 so it doesn't go past the board. Math: 
if board[1][0] + board[2][0] + board[3][0] + board[4][0] === 4

Vertical win: 
Need to loop through board start bottom left to right.
Add one to row to go up the column chosen. Has to stop at four (because 0-5 rows). Column has to stop at 7 cause 0-6 columns. Needs to go through all columns. 

Diagonal Up win: 
Need to loop through board start bottom left to right.
Add one to both row and column, both starting at zero. 
Starting at the left-most column: rowIdx cellIdx, + colIdx + 1 to move over cell to right (as long as you leave row idx the same)

Diagonal Down win: 
This one is funky. Need to loop through board starting at highest row. Board needs to stop at column index four and start at row index 2. Then you need to add one to go across the columns and subtract to go down the rows. 

Render function: 
For rendering, use a nested forEach, where the outer forEach iterates over the column arrays and the inner forEach iterates over each row within the current column.  Then, you can use the indexes of the two forEach's to select the proper DOM element to style  by using getElementById if you put id's on the elements. 
The cell will hold the null/1/-1 value of the state.
Want to make the buttons disappear when column is full. 