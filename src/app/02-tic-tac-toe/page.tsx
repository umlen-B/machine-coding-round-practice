import React from 'react';
import Board from '../../components/TicTacToe/Board';
import './style.css';
const Game: React.FC = () => {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
};

export default Game;
