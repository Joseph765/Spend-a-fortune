import React, { useContext, useState } from 'react';
import WalletContext from './AppContext.jsx';

function StartGame() {

  const { setStartGame } = useContext(WalletContext);

  return (
    <div className="starting-screen">
      <h1>Click To Start?</h1>
      <button onClick={() => setStartGame(true)}>Start</button>
    </div>
  );
}

export default StartGame;