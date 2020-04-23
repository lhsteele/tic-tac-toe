import React, { Component } from 'react'
import Square from './Square';

export default class Board extends Component {
  findValue = (idx, isX, currentSquare) => {
    if (idx === currentSquare) {
      return isX ? 'X' : 'O'
    }
    return null
  };

  renderSquares(isX, currentSquare) {
    // const squares = new Array(9).fill().map((el, i) => el = <Square value={this.findValue(i)} idx={i} logTurn={this.props.logTurn}/>)
    const squares = new Array(9).fill().map((el, i) => el = <Square idx={i} logTurn={this.props.logTurn} value={this.findValue(i, isX, currentSquare)}/>)
    console.log(squares)
    return squares
  };

  render() {
    const { isX, currentSquare } = this.props
    console.log(`isX ${isX}`)
    console.log(`currentSquare ${currentSquare}`)
    return (
      <div className="board">
        {this.renderSquares(isX, currentSquare)}
      </div>
    )
  }
}
