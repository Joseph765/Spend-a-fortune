import React, { useContext, useEffect } from "react";
import WalletContext from "./AppContext.jsx";

import {
  setItems,
  setWallet,
  setTotal,
  setItemsBought,
  setCurrentPageItems,
  setGameStatus,
  buy
} from "../context/actions.jsx";

function ListItem() {
  const { state, dispatch } = useContext(WalletContext);

  useEffect(() => {
    if (state.searchTerm === "") {
      setCurrentPageItems(dispatch, createCurrentItems(state.items));
    } else {
      setCurrentPageItems(dispatch, createCurrentItems(state.searchResults));
    }
  }, [state.currentPage, state.searchResults, state.searchTerm]);

  function createCurrentItems(items) {
    if (items.length > 0) {
      const currentItems = [];

      for (let i = state.currentPage * 9 - 9; i < state.currentPage * 9; i++) {
        if (items[i]) {
          currentItems.push(items[i]);
        }
      }

      return currentItems;
    }

    return items;
  }

  if (state.currentPageItems.length > 0) {
    return state.currentPageItems.map((item) => {
      return (
        <div className="listItem">
          <img src={item.imageUrl} />
          <p>{item.productName}</p>
          <p>${item.price}</p>
          <button
            className={item.isSoldOut ? "buy-btn-red" : "buy-btn-green"}
            onClick={(event) =>
              // buy(event, parseInt(item.price), item.productName, item.id)
              buy(dispatch, {name: item.productName, price: item.price})
            }
          >
            Buy
          </button>
        </div>
      );
    });
  }
  return (
    <>
      <h1>No Results Found For: {state.searchTerm}</h1>
    </>
  );
}

export default ListItem;
