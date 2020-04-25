import React, { Component } from 'react'
import Board from './Board';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isX: false,
      currentSquare: null,
      history: Array(9).fill(null)
    }
  };

  setPlayer = () => {
    this.setState({
      isX: !this.state.isX 
    })
  };

  addToHistory = idx => {
    const currentHistory = this.state.history;
    const currentSq = this.state.currentSquare;
    currentHistory[currentSq] = this.state.isX ? 'X' : 'O'
    this.setState({ history: currentHistory })
  };

  setCurrentSquare = idx => {
    this.setState({ currentSquare: idx }, () => this.addToHistory())
  };

  logTurn = idx => {
    this.setPlayer();
    this.setCurrentSquare(idx);
  };

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board 
            isX={this.state.isX}
            logTurn={this.logTurn}
            currentSquare={this.state.currentSquare}
            gameHistory={this.state.history}
          />
        </div>
      </div>
    )
  }
}
