# CONNECT FOUR


# DESCRIPTION

A two player game to connect four chips of the same color in a row. Connect Four was created in 1974 and has been enjoyed by thousands of families since. 

____

# IMAGES 

<a href="https://imgur.com/Q4B0Eyq"><img src="https://i.imgur.com/Q4B0Eyq.png" title="source: imgur.com" height= 450px width= 450px/></a>

<a href="https://imgur.com/aiLyhMb"><img src="https://i.imgur.com/aiLyhMb.png" title="source: imgur.com" height= 450px width= 450px/></a>

<a href="https://imgur.com/n0n07ZT"><img src="https://i.imgur.com/n0n07ZT.png" title="source: imgur.com" height= 450px width= 450px/></a>

<a href="https://imgur.com/pZY1RoB"><img src="https://i.imgur.com/pZY1RoB.png" title="source: imgur.com" height= 450px width= 450px/></a>

<a href="https://imgur.com/aCy4rCg"><img src="https://i.imgur.com/aCy4rCg.png" title="source: imgur.com" height= 450px width= 450px/></a>

____

# TECHNOLOGY 

HTML
CSS
JavaScript
Imgur 

____
# GETTING STARTED 

https://raga4905.github.io/Connect-4/ 

Initialize function:
Set the values of the table array to null and create an array of arrays to represent the columns.

HandleDropCoin function: 
When the player clicks the drop button, each button should be associated with an array. It should loop through the array and get to the index of null. If the column is full, it'll stop adding coins. 

Winning logic:

<a href="https://imgur.com/rhqLb2F"><img src="https://i.imgur.com/rhqLb2F.jpg" title="source: imgur.com" height= 300px width= 400px/></a>
 
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
Need to loop through board starting at highest row. Board needs to stop at column index four and start at row index 2. Then you need to add one to go across the columns and subtract to go down the rows.


____
# NEXT STEPS 

Add sound to coin drop 

Add animation on winner message 


