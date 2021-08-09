import React, { useContext } from "react";
import WalletContext from "./AppContext.jsx";

import Timer from "./Timer.jsx";
import ShoppingCart from "./ShoppingCart.jsx";

import { setSearchTerm } from "../context/actions.jsx";

function Header() {
  const { state, dispatch } = useContext(WalletContext);

  const items = state.itemsBought.map((item) => {
    return <p>{`${item.name}: x${item.num}`}</p>;
  });

  return (
    <header>
      <ShoppingCart />
      <h1 className="title">Spend $100,000! :D</h1>
      <div className="search-bar">
        <span>Search: </span>
        <input type="text" onChange={(e) => setSearchTerm(dispatch, e.target.value)} />
      </div>
      <Timer />
      <div className="wallet">
        <p className="amount">Amount left: ${state.wallet}</p>
        <p className="total">Total spent: ${state.total}</p>
      </div>
    </header>
  );
}

export default Header;
