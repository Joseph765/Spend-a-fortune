import React, { useContext } from 'react';
import WalletContext from './AppContext.jsx';

function Footer() {

  const { setCurrentPage, items, searchTerm, currentPageItems, searchResults } = useContext(WalletContext);

  const buttons = [];

  if (searchTerm === '') {
    for (let i = 0; i < items.length % 9 + 1; i ++) {
      buttons.push((
        <button className="page-btn" onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
      ));
    }
  } else {
    for (let i = 0; i < searchResults.length % 9 + 1; i ++) {
      buttons.push((
        <button className="page-btn" onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
      ));
    }
  }

  return (
    <div className="footer">
      {buttons}
    </div>
  );
}

export default Footer;
