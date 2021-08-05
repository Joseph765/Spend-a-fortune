import React, { useContext } from 'react';
import WalletContext from './AppContext.jsx';

import ShoppingCart from './ShoppingCart.jsx';

function GameOver() {

  const { gameStatus } = useContext(WalletContext);

  return (
    <>
      <h1 className="game-over">{gameStatus}</h1>
      <ShoppingCart />
    </>
  )
}

export default GameOver;