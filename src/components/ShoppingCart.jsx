import React, { useContext, useEffect } from "react";
import WalletContext from "./AppContext.jsx";

function ShoppingCart() {
  const { itemsBought } = useContext(WalletContext);

  useEffect(() => {
    console.log("item 1 changed");
  }, [itemsBought]);

  const items = itemsBought.map((item) => {
    return <p>{`${item.name}: x${item.num}`}</p>;
  });

  console.log("ShoppingCart.jsx rendered");

  return (
    <div className="shopping-cart">
      <h2>Items Bought:</h2>
      <p>{items}</p>
    </div>
  );
}

export default ShoppingCart;
