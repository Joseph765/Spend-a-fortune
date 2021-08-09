import React, { useContext, useState } from "react";
import WalletContext from "./AppContext.js";

import { setStartGame } from "../context/actions.js";

function StartGame() {
  const { state, dispatch } = useContext(WalletContext);

  return (
    <div className="starting-screen">
      <h1>Click To Start?</h1>
      <button onClick={() => setStartGame(dispatch, true)}>Start</button>
    </div>
  );
}

export default StartGame;
