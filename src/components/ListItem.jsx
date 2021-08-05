import React, { useContext, useEffect } from "react";
import WalletContext from "./AppContext.jsx";

function ListItem() {
  const {
    items,
    setItems,
    wallet,
    setWallet,
    total,
    setTotal,
    itemsBought,
    setItemsBought,
    currentPage,
    currentPageItems,
    setCurrentPageItems,
    searchTerm,
    searchResults,
    setGameStatus,
  } = useContext(WalletContext);

  useEffect(() => {
    if (searchTerm === "") {
      setCurrentPageItems(createCurrentItems(items));
    } else {
      setCurrentPageItems(createCurrentItems(searchResults));
    }
  }, [currentPage, searchTerm]);

  function buy(event, price, name, id) {
    if (wallet - price <= 0) {
      setGameStatus("You Won! :)");
    }

    let found = false;

    for (let i = 0; i < itemsBought.length; i++) {
      if (itemsBought[i]["name"] === name) {
        found = true;
        if (itemsBought[i]["num"] !== 5) {
          setWallet(wallet - price);
          setTotal(total + price);
          const newArr = itemsBought;
          newArr[i]["num"] += 1;
          setItemsBought(newArr);
        } else {
          const newItems = items.map((item) => {
            if (item.productName === name) {
              item.soldOut = true;
            }
            return item;
          });
          setItems(newItems);
        }
      }
    }

    if (!found) {
      setWallet(wallet - price);
      setTotal(total + price);
      const newObj = {};
      newObj["name"] = name;
      newObj["num"] = 1;
      itemsBought.push(newObj);
    }
  }

  function createCurrentItems(items) {
    const currentItems = [];

    for (let i = currentPage * 9 - 9; i < currentPage * 9; i++) {
      let item = items[i];
      if (item) {
        currentItems.push(
          <div className="listItem">
            <img src={item.imageUrl} />
            <p>{item.productName}</p>
            <p>${item.price}</p>
            <button
              className={item.isSoldOut ? "buy-btn-red" : "buy-btn-green"}
              onClick={(event) =>
                buy(event, parseInt(item.price), item.productName, item.id)
              }
            >
              Buy
            </button>
          </div>
        );
      }
    }

    return currentItems;
  }

  let currentItems;
  if (searchTerm === "") {
    currentItems = createCurrentItems(items);
  } else {
    currentItems = createCurrentItems(searchResults);
  }

  if (currentItems.length > 0) {
    return <>{currentItems}</>;
  }
  return (
    <>
      <h1>No Results Found For: {searchTerm}</h1>
    </>
  );
}

export default ListItem;
