import React, { useContext, useEffect } from "react";
import WalletContext from "./AppContext.jsx";

function ShoppingCart() {
  const { state, dispatch } = useContext(WalletContext);

  const items = state.itemsBought.map((item, index) => {
    return <p key={index}>{`${item.name}: x${item.num}`}</p>;
  });

  return (
    <div className="shopping-cart">
      <h2>Items Bought:</h2>
      <div>{items}</div>
    </div>
  );
}

export default ShoppingCart;
