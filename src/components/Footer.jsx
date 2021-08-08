import React, { useEffect, useContext, useState } from "react";
import WalletContext from "./AppContext.jsx";
import { setCurrentPage } from "../context/actions.jsx";

function Footer() {
  const { state, dispatch } = useContext(WalletContext);

  const [buttons, setButtons] = useState([]);

  useEffect(() => {
    if (state.searchTerm !== "") {
      buttons.length = 0;
      setCurrentPage(dispatch, 1);
      for (let i = 0; i < state.searchResults.length / 9; i++) {
        buttons.push(
          <button className="page-btn" onClick={() => setCurrentPage(dispatch, i + 1)}>
            {i + 1}
          </button>
        );
        if (i === state.searchResults.length / 9 && state.searchResults.length % 9 > 0) {
          buttons.push(
            <button className="page-btn" onClick={() => setCurrentPage(dispatch, i + 2)}>
              {i + 2}
            </button>
          );
        }
      }
    }
  }, [state.searchResults, state.searchTerm]);

  if (state.searchTerm === "") {
    buttons.length = 0;
    for (let i = 0; i < state.items.length / 9; i++) {
      buttons.push(
        <button className="page-btn" onClick={() => setCurrentPage(dispatch, i + 1)}>
          {i + 1}
        </button>
      );
      if (i === state.items.length / 9 && state.items.length % 9 > 0) {
        buttons.push(
          <button className="page-btn" onClick={() => setCurrentPage(dispatch, i + 2)}>
            {i + 2}
          </button>
        );
      }
    }
  }

  return <div className="footer">{buttons}</div>;
}

export default Footer;
