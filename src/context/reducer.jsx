function reducer(state, action) {
  switch (action.type) {
    case "setWallet":
      return { ...state, wallet: action.payload };
    case "setTotal":
      return { ...state, total: action.payload };
    case "setItems":
      return { ...state, items: action.payload };
    case "setItemsBought":
      return { ...state, itemsBought: action.payload };
    case "setCurrentPage":
      return { ...state, currentPage: action.payload };
    case "setCurrentPageItems":
      return { ...state, currentPageItems: action.payload };
    case "setSearchTerm":
      return { ...state, searchTerm: action.payload };
    case "setSearchResults":
      return { ...state, searchResults: action.payload };
    case "setStartGame":
      return { ...state, startGame: action.payload };
    case "setGameStatus":
      return { ...state, gameStatus: action.payload };
    case "buy":
      if (state.wallet - action.payload.price <= 0) {
        return { ...state, gameStatus: "You Won! :)" };
      }

      let found = false;

      for (let i = 0; i < state.itemsBought.length; i++) {
        if (state.itemsBought[i]["name"] === action.payload.name) {
          found = true;
          if (state.itemsBought[i]["num"] !== 5) {
            const newWallet = state.wallet - action.payload.price;
            const newTotal = state.total + action.payload.price;
            const newArr = state.itemsBought;
            newArr[i]["num"] += 1;
            return {
              ...state,
              wallet: newWallet,
              total: newTotal,
              itemsBought: newArr,
            };
          } else {
            const newItems = state.items.map((item) => {
              if (item.productName === action.payload.name) {
                item.isSoldOut = true;
              }
              return item;
            });
            return { ...state, items: newItems };
          }
        }
      }

      if (!found) {
        const newWallet = state.wallet - action.payload.price;
        const newTotal = state.total - action.payload.price;
        const newObj = {};
        newObj["name"] = action.payload.name;
        newObj["num"] = 1;
        const newArr = state.itemsBought;
        newArr.push(newObj);
        return {
          ...state,
          wallet: newWallet,
          total: newTotal,
          itemsBought: newArr,
        };
      }
    default:
      return state;
  }
}

export default reducer;
