import React, { Component } from 'react'
import Board from './Board';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isX: false,
      currentSquare: null
    }
  };

  logTurn = (idx) => {
    this.setPlayer();
    this.setCurrentSquare(idx);
    this.setValue(idx);
  };

  setPlayer = () => {
    this.setState({
      isX: !this.state.isX 
    })
  };

  setCurrentSquare = (idx) => {
    this.setState({ currentSquare: idx })
  };

  setValue = (idx) => {
    if (idx === this.props.currentSquare) {
      return this.state.isX ? 'X' : 'O'
    }
    return null;
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board 
            isX={this.state.isX}
            logTurn={this.logTurn}
            currentSquare={this.state.currentSquare}
            value={this.setValue()}
          />
        </div>
      </div>
    )
  }
}
