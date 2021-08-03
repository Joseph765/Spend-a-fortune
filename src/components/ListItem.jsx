import React, { useContext, useEffect } from 'react';
import WalletContext from './AppContext.jsx';

function ListItem() {

  const { items, wallet, setWallet, total, setTotal, itemsBought, setItemsBought, currentPage, currentPageItems, setCurrentPageItems, searchTerm, searchResults } = useContext(WalletContext);

  function buy(price, name, id) {

    let found = false;

    setWallet(wallet - price);
    setTotal(total + price);

    for (let i = 0; i < itemsBought.length; i ++) {
      if (itemsBought[i]["name"] === name) {
        found = true;
        itemsBought[i]["num"] += 1;
      }
    }

    if (!found) {
      const newObj = {};
      newObj["name"] = name;
      newObj["num"] = 1;
      itemsBought.push(newObj);
    }

  }

  function createCurrentItems(items) {
    const currentItems = [];

    for (let i = currentPage * 9 - 9; i < currentPage * 9; i ++) {
      let item = items[i];
      if (item) {
        currentItems.push((
          <div className="listItem">
            <img src={item.imageUrl} />
            <p>{item.productName}</p>
            <p>${item.price}</p>
            <button onClick={() => buy(parseInt(item.price), item.productName, item.id)}>Buy</button>
          </div>
        ));
      }
    }

    return currentItems;
  }

  let currentItems;
  if (searchTerm === '') {
    currentItems = createCurrentItems(items);
  } else {
    currentItems = createCurrentItems(searchResults);
  }

  if (currentItems.length > 0) {
    return(
      <>
        {currentItems}
      </>
    );
  }
  return(
    <>
      <h1>No Results Found For: {searchTerm}</h1>
    </>
  );
}

export default ListItem;