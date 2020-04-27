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

  xWin = history => {
    const xPositions = history.map((el, i) => { 
      return el === 'X' ? i : null
    }).filter(el => el !== null);

    this.winningPositions.forEach(pos => {
      pos.forEach(p => {
        if (!xPositions.includes(p)) {
          return false
        }
      })
      return true
      // return xPositions.includes(pos) ? true : false
    });
  };

  oWin = history => {

  };

  logTurn = idx => {
    this.setPlayer();
    this.setCurrentSquare(idx);
  };

  render() {
    console.log(this.xWin(this.state.history))
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
