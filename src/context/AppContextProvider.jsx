import React, { useReducer } from "react";
import initialState from "../context/initialState.js";
import WalletContext from "../components/AppContext.js";
import reducer from "../context/reducer.js";

function AppContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <WalletContext.Provider value={{ state, dispatch }}>
      {props.children}
    </WalletContext.Provider>
  );
}

export default AppContextProvider;
