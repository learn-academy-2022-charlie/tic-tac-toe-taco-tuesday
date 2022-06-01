# ❌ ⭕️ Tic Tac Toe

This is a web game for two players on one device, taking turns. You will have to use component state to keep track of whose turn it is and which squares have been marked by each player.

This project will challenge your knowledge of React but should also be an exercise in creating good user experiences. Your view should be styled to look good as well as function flawlessly.

### 📚 User Stories
- As a user, I can see a 3x3 grid game board on the page.
    - Create a div element to act as the game board "board"
    - Used the .map() method on the squares array to create a square component for each element in the array
    - Style "board" appropiately to fit 3 squares on each row by adjusting 620px and each square 200px
    - Center board and squares using flexbox
    - branch: grid
- As a user, I can click on a square to mark it.
    - Create a method that will contain the over all logic and change state in the main Application
    - Pass this method to each Square as a prop
    - Create a method withing the Square component in order to use the method
    - Create an onClick Event Listener for the Square
    - After user clicks a Square, invokes handleGameLogic
        - Takes the index of the square, updates the specific index within the state
        - Lastly, save the state
- As a user, my partner can click on a square after me and see their mark.
    - Create isX piece of state to act as a trigger or flag
    - Within game logic
        - Created a if conditional to check if isX is true
            - If true 
                - Updated the index with an "X"
                - Set state of isX to false
            - Else
                - Update the index with a "O"
                - Set state of isX to true
- As a user, I can't click on a square that has already been marked.
    - If the index of the square is either X or O; Do nothing
- As a user, when either my partner or I win the game (3 squares in a row: horizontally, vertically, or diagonally) I can see a notice telling me which player won.
    - Create a method called checkWinCondition
    - Use conditional statements to check if index are equal to each other from left to right, top to bottom, and diagonal
        - If they are display an alert and change the state of winnerAnnouncement including X or O
- As a user, I can't continue playing the game after the game has been won.
    - Create a conditional to determine whether a winner has been announced and state has been changed
    - If winner, do nothing
    - Else, allows player to place X or O on squares
- As a user, if there are no more squares available, I can see a notice telling me that the game has ended.
    - Create a method called noMoreEmptySquares to determine if there are any null values within the array
        - If there are null values within the array, do Nothin
        - Else, this dictates that there are no more null values meaning all the squares have been used
            - Set an alert to announce a Tie
            - Change state of winnerAnnouncement to display that there is no winner
- As a user, I can click on a restart button that will clear the game board.
    - Create a button
        - Use Conditional rendering to display the reset button
    - Add onClick attribute
    - Tie method of gameReset into this button
    - gameReset
        - Reset the states to their original values

### 🏔 Stretch Goals
- As a user, I can see a notification that informs me whether it is currently my partner or my turn.
    - Use a ternary operator to display whos turn it is based
- As a user, I can choose my marker from a predetermined list (X, O, a color, an emoji, etc...).

### 🛠 Resources
- [Tic Tac Toe](https://en.wikipedia.org/wiki/Tic-tac-toe)
- [Tic Tac Toe win condition in React](https://forum.freecodecamp.org/t/need-help-understanding-react-tic-tac-toe-winner-function/137840)
