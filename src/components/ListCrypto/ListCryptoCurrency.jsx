import React, { useEffect, useState } from "react";
import CryptoStore from "../../stores/crypto-store";
import { loadCryptoCurrency } from "../../actions/action-creators";

function CryptoList() {
  const [cryptoList, setCryptoList] = useState(CryptoStore.getCryptoList());

  useEffect(() => {
    CryptoStore.addEventListener(handleChange);
    if (!cryptoList) {
      loadCryptoCurrency();
    }
    return () => {
      CryptoStore.removeEventListener(handleChange);
    };
  }, [cryptoList]);

  function handleChange() {
    setCryptoList(CryptoStore.getCryptoList());
  }

  return <div>{cryptoList}</div>;
}

export default CryptoList;
