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
    <>
      <Timer />
      <h1 className="title">Spend A Fortune!</h1>
      <div className="wallet">
        <p>Amount to spend: ${state.wallet}</p>
        <p>Total spent so far: ${state.total}</p>
        <div className="search-bar">
          <input type="text" onChange={(e) => setSearchTerm(dispatch, e.target.value)} />
        </div>
      </div>
      <ShoppingCart />
    </>
  );
}

export default Header;
