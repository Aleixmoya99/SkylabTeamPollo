import React, { useEffect, useState } from "react";
import CryptoStore from "../../stores/crypto-store";
import { loadCryptoCurrency } from "../../actions/action-creators";

function CryptoList() {
  const [cryptoList, setCryptoList] = useState(CryptoStore.getCryptoList());
  console.log(cryptoList);
  function handleChange() {
    setCryptoList(CryptoStore.getCryptoList());
  }

  useEffect(() => {
    CryptoStore.addEventListener(handleChange);
    if (!cryptoList) {
      loadCryptoCurrency();
    }
    return () => {
      CryptoStore.removeEventListener(handleChange);
    };
  }, [cryptoList]);

  return (
    <>
      <h1>Hola Golberti</h1>
      <ul>
        {cryptoList ? (
          cryptoList.map((data) => (
            <li key={data.symbol}>
              <img src={data.image} />
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
