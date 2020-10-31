import React, { useEffect, useState } from "react";
import CryptoStore from "../../stores/crypto-store";
import { loadCryptoCoin } from "../../actions/action-creators";

function CryptoDetail() {
  const [cryptoCoin, setCryptCoin] = useState(null);

  function handleChange() {
    setCryptCoin(CryptoStore.getCryptoCoin());
  }

  useEffect(() => {
    CryptoStore.addEventListener(handleChange);
    if (!cryptoCoin) {
      loadCryptoCoin("bitcoin");
    }
    return () => {
      CryptoStore.removeEventListener(handleChange);
    };
  }, [cryptoCoin]);

  return <div>Pruebas</div>;
}

export default CryptoDetail;
