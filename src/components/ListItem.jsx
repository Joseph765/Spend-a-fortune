import React, { useContext, useEffect } from "react";
import WalletContext from "./AppContext.js";

import {
  setItems,
  setWallet,
  setTotal,
  setItemsBought,
  setCurrentPageItems,
  setGameStatus,
  buy,
} from "../context/actions.js";

import { createCurrentItems } from "../utils/index.js";

function ListItem() {
  const { state, dispatch } = useContext(WalletContext);

  useEffect(() => {
    if (state.searchTerm === "") {
      setCurrentPageItems(
        dispatch,
        createCurrentItems(state.items, state.currentPage)
      );
    } else {
      setCurrentPageItems(
        dispatch,
        createCurrentItems(state.searchResults, state.currentPage)
      );
    }
  }, [state.currentPage, state.searchResults, state.searchTerm]);

  if (state.currentPageItems.length > 0) {
    return state.currentPageItems.map((item) => {
      return (
        <div className="listItem" key={item.id}>
          <img src={item.imageUrl} />
          <p>{item.productName}</p>
          <p>${item.price}</p>
          <button
            className={item.isSoldOut ? "buy-btn-red" : "buy-btn-green"}
            onClick={(event) =>
              buy(dispatch, { name: item.productName, price: item.price })
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
