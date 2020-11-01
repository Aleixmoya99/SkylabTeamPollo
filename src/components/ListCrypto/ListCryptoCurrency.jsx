import React, { useEffect, useState } from "react";
import cryptoStore from "../../stores/crypto-store";
import { loadCoinsMarkets } from "../../actions/action-creators";

function CryptoList() {
  const [cryptoList, setCryptoList] = useState(cryptoStore.getCryptoList());
  
  function handleChange() {
    setCryptoList(cryptoStore.getCryptoList());
  }

  useEffect(() => {
    cryptoStore.addEventListener(handleChange);
    if (!cryptoList) {
      loadCoinsMarkets();
    }
    return () => {
      cryptoStore.removeEventListener(handleChange);
    };
  }, [cryptoList]);

  return (
    <>
      <h1>Hola Golberti</h1>
      <ul>
        {cryptoList ? (
          cryptoList.map((data) => (
            <li key={data.symbol}>
              <img src={data.image} alt="crypto_logo" />
              {`${data.name} Current value: ${data.current_price} 24hour value change:${data.price_change_percentage_24h}`}
              <button>Save</button>
            </li>
          ))
        ) : (
          <li>LOADING....</li>
        )}
      </ul>
    </>
  );
}

export default CryptoList;
