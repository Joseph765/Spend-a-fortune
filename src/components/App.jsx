import React, { useState, createContext, useContext, useEffect } from "react";
import GameStart from "./GameStart.jsx";
import GameOver from "./GameOver.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import List from "./List.jsx";
import WalletContext from "./AppContext.jsx";

import initialState from "../context/initialState.jsx";
import { setItems, setSearchResults } from "../context/actions.jsx";

function App() {
  const { state, dispatch } = useContext(WalletContext);

  function getRequest() {
    if (state.searchTerm === "") {
      fetch(`/data`)
        .then((result) => result.json())
        .then((result) => {
          setItems(dispatch, result);
        });
    } else {
      fetch(`/search/${state.searchTerm}`)
        .then((result) => result.json())
        .then((result) => {
          setSearchResults(dispatch, result);
        });
    }
  }

  useEffect(() => {
    getRequest();
  }, [state.searchTerm]);

  // console.log("itemsBought: " + state.itemsBought);

  if (state.items.length > 0) {
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
  return <h1>No items found under: {state.searchTerm}</h1>;
}

export default App;
