import React, { useState, useEffect, useContext } from 'react';
import WalletContext from './AppContext.jsx';

function Timer() {

  const { setGameStatus } = useContext(WalletContext);
  const [timer, setTimer] = useState(60000);
  const [currentTime, setCurrentTime] = useState("1:00");

  function millisToMinutesAndSeconds(millis) {
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return 0 + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  setTimeout(() => {
    setCurrentTime(millisToMinutesAndSeconds(timer - 1000));
    setTimer(timer - 1000);

    if (timer === 0) {
      setGameStatus('you lost :(');
    }
  }, 1000);

  return (
    <p className="timer">{currentTime}</p>
  );

}

export default Timer;