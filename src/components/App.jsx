import React, { useState, createContext, useContext, useEffect } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import List from './List.jsx';
import WalletContext from './AppContext.jsx';

function App() {

  const [wallet, setWallet] = useState(10000);
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState([]);
  const [itemsBought, setItemsBought] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageItems, setCurrentPageItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState('');

  function getRequest() {
    if (searchTerm === '') {
      fetch(`/data`)
        .then(result => result.json())
        .then(result => {
          setItems(result);
        });
    } else {
      fetch(`/search/${searchTerm}`)
        .then(result => result.json())
        .then(result => {
          setSearchResults(result);
        });
    }
  }

  useEffect(() => {
    getRequest();
  }, [searchTerm]);

  if (items.length > 0) {
    return (
      <WalletContext.Provider value={{wallet, setWallet, total, setTotal, itemsBought, items, currentPage, setCurrentPage, searchTerm, setSearchTerm, currentPageItems, setCurrentPageItems, searchResults}}>
        <Header />
        <List />
        <Footer />
      </WalletContext.Provider>
    );
  }
  return (
    <h1>No items found under: {searchTerm}</h1>
  );
}

export default App;