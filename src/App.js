import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: [null, null, null, null, null, null, null, null, null],
      isX: true,
      winnerAnnouncement: ""
    }
  }

  gameReset = () => {
    this.setState({squares: [null, null, null, null, null, null, null, null, null]})
    this.setState({isX: true})
    this.setState({winnerAnnouncement: ""})
  }

  handleGameLogic = (index) => {
    const { squares, isX, winnerAnnouncement } = this.state
    if(winnerAnnouncement){
      // Do nothing
    } else {
      if(squares[index] === "X" || squares[index] === "O") {
        // Do nothing because there is already an X or O
      } else {
        if(isX){
          squares[index] = "X"
          this.checkWinCondition()
          this.setState({isX: false})
        } else {
          squares[index] = "O"
          this.checkWinCondition()
          this.setState({isX: true})
        } 
        this.noMoreEmptySquares(squares)
        this.setState({squares: squares})
      }
    }
   }

   noMoreEmptySquares = (gameboard) => {
     if(gameboard.includes(null)){
      // Do nothing, continue game
     } else {
      alert("IT'S A TIE")
      this.setState({winnerAnnouncement: "THERE IS NO WINNER"})
     }
   }
  
   checkWinCondition = () => {
    const { squares } = this.state
    if((squares[0] === squares[1] && squares[1] === squares[2]) && squares[0] !== null){ // l to r: top
      alert("YOU WIN")
      this.setState({winnerAnnouncement: "The Winner is " + squares[0]})
    } else if((squares[3] === squares[4] && squares[4] === squares[5]) && squares[3] !== null){ // l to r: middle
      alert("YOU WIN")
      this.setState({winnerAnnouncement: "The Winner is " + squares[3]})
    } else if((squares[6] === squares[7] && squares[7] === squares[8]) && squares[6] !== null){ // l to r: bottom
      alert("YOU WIN")
      this.setState({winnerAnnouncement: "The Winner is " + squares[6]})
    } else if((squares[0] === squares[3] && squares[3] === squares[6]) && squares[0] !== null){ // t to b: left
      alert("YOU WIN")
      this.setState({winnerAnnouncement: "The Winner is " + squares[0]})
    } else if((squares[1] === squares[4] && squares[4] === squares[7]) && squares[1] !== null){ // t to b: middle
      alert("YOU WIN")
      this.setState({winnerAnnouncement: "The Winner is " + squares[1]})
    } else if((squares[2] === squares[5] && squares[5] === squares[8]) && squares[2] !== null){ // t to b: right
      alert("YOU WIN")
      this.setState({winnerAnnouncement: "The Winner is " + squares[2]})
    } else if((squares[0] === squares[4] && squares[4] === squares[8]) && squares[0] !== null){ // diagonal
      alert("YOU WIN")
      this.setState({winnerAnnouncement: "The Winner is " + squares[0]})
    } else if((squares[2] === squares[4] && squares[4] === squares[6]) && squares[2] !== null){ // diagonal
      alert("YOU WIN")
      this.setState({winnerAnnouncement: "The Winner is " + squares[2]})
    }
   }

  render() {
    return(
      <>
        <h1 id="title">Tic Tac Toe</h1>
        {this.state.isX ? <h2>Its X turn</h2> : <h2>Its O turn</h2>}
        <h3 id="winner-announcement">{this.state.winnerAnnouncement}</h3>
        <div id="board">
          {this.state.squares.map((value, index) => {
            return(
              <Square 
                value={value}
                index={index}
                key={index}
                handleGameLogic={this.handleGameLogic}
              />
            )
          })}
          <footer>~ Made by Jorge and Jenner ~</footer>
          {this.state.winnerAnnouncement && <div id="restart-btn" onClick={this.gameReset}>Restart</div>}
        </div>
      </>
    )
  }
}
export default App