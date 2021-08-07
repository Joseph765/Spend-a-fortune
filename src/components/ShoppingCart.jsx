import React, { useContext, useEffect } from "react";
import WalletContext from "./AppContext.jsx";

function ShoppingCart() {
  const { itemsBought } = useContext(WalletContext);

  const items = itemsBought.map((item) => {
    return <p>{`${item.name}: x${item.num}`}</p>;
  });

  return (
    <div className="shopping-cart">
      <h2>Items Bought:</h2>
      <p>{items}</p>
    </div>
  );
}

export default ShoppingCart;
