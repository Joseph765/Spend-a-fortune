import React, { useContext, useEffect } from 'react';
import WalletContext from './AppContext.jsx';

function ListItem() {

  const { items, wallet, setWallet, total, setTotal, itemsBought, setItemsBought, currentPage, currentPageItems, setCurrentPageItems, searchTerm, searchResults } = useContext(WalletContext);

  function buy(price, name, id) {
    setWallet(wallet - price);
    setTotal(total + price);

    if (itemsBought[id]) {
      itemsBought[id]["num"] += 1;
    } else {
      const newObj = {};
      newObj["name"] = name;
      newObj["num"] = 1;
      itemsBought[id] = newObj;
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

  return(
    <>
      {currentItems}
    </>
  );
}

export default ListItem;