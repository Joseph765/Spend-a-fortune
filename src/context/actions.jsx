export function setWallet(dispatch, payload) {
  dispatch({type: "setWallet", payload: payload});
}

export function setTotal(dispatch, payload) {
  dispatch({type: "setTotal", payload: payload});
}

export function setItems(dispatch, payload) {
  dispatch({type: "setItems", payload: payload});
}

export function setItemsBought(dispatch, payload) {
  dispatch({type: "setItemsBought", payload: payload});
}

export function setCurrentPage(dispatch, payload) {
  dispatch({type: "setCurrentPage", payload: payload});
}

export function setCurrentPageItems(dispatch, payload) {
  dispatch({type: "setCurrentPageItems", payload: payload});
}

export function setSearchTerm(dispatch, payload) {
  dispatch({type: "setSearchTerm", payload: payload});
}

export function setSearchResults(dispatch, payload) {
  dispatch({type: "setSearchResults", payload: payload});
}

export function setStartGame(dispatch, payload) {
  dispatch({type: "setStartGame", payload: payload});
}

export function setGameStatus(dispatch, payload) {
  dispatch({type: "setGameStatus", payload: payload});
}

export function buy(dispatch, payload) {
  dispatch({type: "buy", payload: payload});
}