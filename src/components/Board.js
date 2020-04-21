import React, { Component } from 'react'
import Square from './Square';
import { thisExpression } from '@babel/types';

export default class Board extends Component {
  // findValue = (idx, isX) => {
  //   if (this.props.isX) {
  //     return this.props.isX ? 'X' : 'O'
  //   } 
  //   return null
  // };



  renderSquares(idx) {
    // const squares = new Array(9).fill().map((el, i) => el = <Square value={this.findValue(i)} idx={i} logTurn={this.props.logTurn}/>)
    const squares = new Array(9).fill().map((el, i) => el = <Square idx={i} logTurn={this.props.logTurn} value={this.props.value}/>)
    console.log(squares)
    return squares
  };

  render() {
    const { isX, currentSquare } = this.props
    return (
      <div className="board">
        {this.renderSquares()}
      </div>
    )
  }
}
