import React, { useState, createContext, useContext, useEffect } from "react";
import GameStart from "./GameStart.jsx";
import GameOver from "./GameOver.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import List from "./List.jsx";
import WalletContext from "./AppContext.js";

import initialState from "../context/initialState.js";
import { setItems, setSearchResults } from "../context/actions.js";

function App() {
  const { state, dispatch } = useContext(WalletContext);
  const [status, setStatus] = useState({});

  function getRequest() {
    if (state.searchTerm === "") {
      fetch(`/data`)
        .then((result) => {
          setStatus({
            statusCode: result.status,
            statusText: result.statusText,
            trace: "Error occurred when fetching all items",
          });
          if (result.status === 200) {
            return result.json();
          }
          return result.status;
        })
        .then((result) => {
          if (typeof result !== "NUMBER") {
            setItems(dispatch, result);
          }
        });
    } else {
      fetch(`/search/${state.searchTerm}`)
        .then((result) => {
          setStatus({
            statusCode: result.status,
            statusText: result.statusText,
            trace: `Error occurred when fetching searched items under: ${state.searchTerm}`,
          });
          if (result.status === 200) {
            return result.json();
          }
          return result.status;
        })
        .then((result) => {
          if (typeof result !== "NUMBER") {
            setSearchResults(dispatch, result);
          }
        });
    }
  }

  useEffect(() => {
    getRequest();
  }, [state.searchTerm]);

  if (state.items.length > 0 && status.statusCode === 200) {
    return (
      <>
        {state.startGame && state.gameStatus === "" ? (
          <>
            <Header />
            <List />
            <Footer />
          </>
        ) : state.gameStatus === "you lost :(" ? (
          <GameOver />
        ) : state.gameStatus === "You Won! :)" ? (
          <GameOver />
        ) : (
          <GameStart />
        )}
      </>
    );
  }

  return (
    <>
      <h1>{status.statusCode}</h1>
      <p>{status.statusText}</p>
      <p>{status.trace}</p>
    </>
  );

  return <p>Error</p>;
}

export default App;
