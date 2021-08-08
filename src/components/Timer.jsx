import React, { useState, useEffect, useContext } from "react";
import WalletContext from "./AppContext.jsx";

import { setGameStatus } from "../context/actions.jsx";
import { millisToMinutesAndSeconds } from "../utils/index.jsx";

function Timer() {
  const [timer, setTimer] = useState(60000);
  const [currentTime, setCurrentTime] = useState("1:00");

  const { state, dispatch } = useContext(WalletContext);

  setTimeout(() => {
    setCurrentTime(millisToMinutesAndSeconds(timer - 1000));
    setTimer(timer - 1000);

    if (timer === 0) {
      setGameStatus(dispatch, "you lost :(");
    }
  }, 1000);

  return <p className="timer">{currentTime}</p>;
}

export default Timer;
