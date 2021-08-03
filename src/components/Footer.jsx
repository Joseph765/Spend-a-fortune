import React, { useContext } from 'react';
import WalletContext from './AppContext.jsx';

function Footer() {

  const { setCurrentPage, items, searchTerm, currentPageItems, searchResults } = useContext(WalletContext);

  const buttons = [];

  if (searchTerm === '') {
    for (let i = 0; i < items.length / 9; i ++) {
      buttons.push((
        <button className="page-btn" onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
      ));
      if (i === items.length / 9 && items.length % 9 > 0) {
        buttons.push((
          <button className="page-btn" onClick={() => setCurrentPage(i + 2)}>{i + 2}</button>
        ));
      }
    }
  } else {
    setCurrentPage(1);
    for (let i = 0; i < searchResults.length / 9; i ++) {
      buttons.push((
        <button className="page-btn" onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
      ));
      if (i === searchResults.length / 9 && searchResults.length % 9 > 0) {
        buttons.push((
          <button className="page-btn" onClick={() => setCurrentPage(i + 2)}>{i + 2}</button>
        ));
      }
    }
  }

  return (
    <div className="footer">
      {buttons}
    </div>
  );
}

export default Footer;
