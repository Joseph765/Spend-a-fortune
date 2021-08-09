import React, { useReducer } from "react";
import initialState from "../context/initialState.jsx";
import WalletContext from "../components/AppContext.jsx";
import reducer from "../context/reducer.jsx";

function AppContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <WalletContext.Provider value={{ state, dispatch }}>
      {props.children}
    </WalletContext.Provider>
  );
}

export default AppContextProvider;
