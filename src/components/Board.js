import React, { Component } from 'react'
import Square from './Square';

export default class Board extends Component {
  renderSquare(idx) {
    return (
      <Square 
        value={this.props.squares[idx]}
        onClick={this.props.onClick(idx)}
      />
    )
  };

  render() {
    return (
      <div>
        <div className="border-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
      </div>
    )
  }
}
