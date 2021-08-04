import React, { useContext } from 'react';
import WalletContext from './AppContext.jsx';

function GameOver() {

  const { gameStatus } = useContext(WalletContext);

  return (
    <h1 className="game-over">{gameStatus}</h1>
  )
}

export default GameOver;