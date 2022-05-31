import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: [null, null, null, null, null, null, null, null, null],
      isX: true
    }
  }

  handleGameLogic = (index) => {
    const { squares, isX } = this.state
    if(squares[index] === "X" || squares[index] === "O") {
      //do nothing
    } else {
      if(isX){
        squares[index] = "X"
        this.setState({isX: false})
      } else {
        squares[index] = "O"
        this.setState({isX: true})
      } 
      this.setState({squares: squares})
    }
   }

  render() {
    return(
      <>
        <h1 id="title">Tic Tac Toe</h1>
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
        </div>
      </>
    )
  }
}
export default App
