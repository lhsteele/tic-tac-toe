import React, { Component } from 'react'
import Board from './Board';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.winningPositions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8]
    ];
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

  findXPositions = history => {
    return history.map((el, i) => {
      return el === 'X' ? i : null
    }).filter(el => el !== null);
  };

  findOPositions = history => {
    return history.map((el, i) => {
      return el === 'O' ? i : null
    }).filter(el => el !== null)
  }

  xWin = () => {
    const xPositions = this.findXPositions(this.state.history)
    for (let i = 0; i < this.winningPositions.length; i++) {
      if (xPositions.includes(this.winningPositions[i][0]) && xPositions.includes(this.winningPositions[i][1]) && xPositions.includes(this.winningPositions[i][2])) {
        return true;
      }
    }
    return false;
  };

  oWin = history => {
    const oPositions = this.findOPositions(this.state.history)
    for (let i = 0; i < this.winningPositions.length; i++) {
      if (oPositions.includes(this.winningPositions[i][0]) && oPositions.includes(this.winningPositions[i][1]) && oPositions.includes(this.winningPositions[i][2])) {
        return true;
      }
    }
    return false;
  };

  logTurn = idx => {
    this.setPlayer();
    this.setCurrentSquare(idx);
  };

  findWinner = () => {
    const history = this.state.history;
    const gameOver = history.every(el => el !== null)
    if (this.xWin()) {
      return 'X is the winner!'
    } else if (this.oWin()) {
      return 'O is the winner!'
    } else if (gameOver && !this.xWin() && !this.oWin()) {
      return 'No one wins!'
    }
  };

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <div className="win-banner">{this.findWinner()}</div>
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
