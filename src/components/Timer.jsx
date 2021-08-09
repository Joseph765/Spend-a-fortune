import React, { useState, useEffect, useContext } from "react";
import WalletContext from "./AppContext.js";

import { setGameStatus } from "../context/actions.js";
import { millisToMinutesAndSeconds } from "../utils/index.js";

function Timer() {
  const [timer, setTimer] = useState(180000);
  const [currentTime, setCurrentTime] = useState("......in 3:00 minutes");

  const { state, dispatch } = useContext(WalletContext);

  setTimeout(() => {
    setCurrentTime(
      "......in " + millisToMinutesAndSeconds(timer - 1000) + " minutes."
    );
    setTimer(timer - 1000);

    if (timer === 0) {
      setGameStatus(dispatch, "you lost :(");
    }
  }, 1000);

  return <p className="timer">{currentTime}</p>;
}

export default Timer;
