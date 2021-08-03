import React, {useContext} from 'react';
import WalletContext from './AppContext.jsx';

function Header() {

  const { wallet, setWallet, total, setTotal, itemsBought, setSearchTerm } = useContext(WalletContext);

  const items = itemsBought.map(item => {
    return <p>{`${item.name}: x${item.num}`}</p>
  });

  return (
    <>
      <h1 className="title">Spend A Fortune!</h1>
      <div className="wallet">
        <p>Amount to spend: ${wallet}</p>
        <p>Total spent so far: ${total}</p>
        <div className="search-bar">
          <input type="text" onChange={(e) => setSearchTerm(e.target.value)}/>
        </div>
      </div>
      <div className="shopping-cart">
        <h2>Items Bought:</h2>
        <p>{items}</p>
      </div>
    </>
  );
}

export default Header;