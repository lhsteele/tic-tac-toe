import React, { Component } from 'react'
import Square from './Square';

export default class Board extends Component {
  setValues = (i, gameHistory) => {
    return gameHistory && gameHistory.map((el, idx) => {
      return i === idx ? gameHistory[idx] : null
    })
  };


  renderSquares(isX, gameHistory) {
    const squares = new Array(9).fill()
      .map((el, i) => el = <Square
        key={i}
        idx={i} 
        logTurn={this.props.logTurn} 
        value={this.setValues(i, gameHistory)}
        />)
    return squares
  };

  render() {
    const { isX, gameHistory } = this.props
    return (
      <div className="board">
        {this.renderSquares(isX, gameHistory)}
      </div>
    )
  }
}
