import React, { Component } from 'react'

class Square extends Component {

  handleClick = () => {
    this.props.handleGameLogic(this.props.index)
  }

  render() {
    return(
      <>
        <div 
        className="square"
        onClick={this.handleClick}
        >
          <p className="mark">{this.props.value}</p>
        </div>
      </>
    )
  }
}
export default Square
