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
    <div>
      Hola Golberti
      {cryptoList ? cryptoList.map((data) => data.id) : <div>LOADING....</div>}
    </div>
  );
}

export default CryptoList;
