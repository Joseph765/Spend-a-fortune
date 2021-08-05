import React, { useState, createContext, useContext, useEffect } from "react";
import GameStart from "./GameStart.jsx";
import GameOver from "./GameOver.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import List from "./List.jsx";
import WalletContext from "./AppContext.jsx";

function App() {
  const [wallet, setWallet] = useState(50000);
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState([]);
  const [itemsBought, setItemsBought] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageItems, setCurrentPageItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const [startGame, setStartGame] = useState(false);
  const [gameStatus, setGameStatus] = useState("");

  function getRequest() {
    if (searchTerm === "") {
      fetch(`/data`)
        .then((result) => result.json())
        .then((result) => {
          setItems(result);
        });
    } else {
      fetch(`/search/${searchTerm}`)
        .then((result) => result.json())
        .then((result) => {
          setSearchResults(result);
        });
    }
  }

  useEffect(() => {
    getRequest();
  }, [searchTerm]);

  if (items.length > 0) {
    return (
      <WalletContext.Provider
        value={{
          wallet,
          setWallet,
          total,
          setTotal,
          itemsBought,
          setItemsBought,
          items,
          setItems,
          currentPage,
          setCurrentPage,
          searchTerm,
          setSearchTerm,
          currentPageItems,
          setCurrentPageItems,
          searchResults,
          setStartGame,
          setGameStatus,
          gameStatus,
        }}
      >
        {startGame && gameStatus === "" ? (
          <>
            <Header />
            <List />
            <Footer />
          </>
        ) : gameStatus === "you lost :(" ? (
          <GameOver />
        ) : gameStatus === "You Won! :)" ? (
          <GameOver />
        ) : (
          <GameStart />
        )}
      </WalletContext.Provider>
    );
  }
  return <h1>No items found under: {searchTerm}</h1>;
}

export default App;
