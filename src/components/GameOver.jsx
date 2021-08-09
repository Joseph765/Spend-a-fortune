import React, { useContext } from "react";
import WalletContext from "./AppContext.js";

import ShoppingCart from "./ShoppingCart.jsx";

function GameOver() {
  const { state, dispatch } = useContext(WalletContext);

  return (
    <>
      <h1 className="game-over">{state.gameStatus}</h1>
      <ShoppingCart />
    </>
  );
}

export default GameOver;
