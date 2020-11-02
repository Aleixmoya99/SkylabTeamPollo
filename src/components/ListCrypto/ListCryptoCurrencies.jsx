import React, { useEffect, useState } from "react";
import cryptoStore from "../../stores/crypto-store";
import {
  loadCoinsMarkets,
  changeList,
  errorNoSavedCurrency,
} from "../../actions/action-creators";
import { Link } from "react-router-dom";
function ListCryptoCurrencies() {
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
      Check:
      <input
        type="checkBox"
        id="thisCheckBox"
        onClick={() => {
          if (document.getElementById("thisCheckBox").checked) {
            if (cryptoStore.getSavedCrypto()) {
              changeList();
            } else {
              errorNoSavedCurrency();
            }
          } else {
            loadCoinsMarkets();
          }
        }}
      />
      <ul className="Menu">
        {cryptoList ? (
          cryptoList.map((data) => (
            <>
              <Link to={`/${data.id}`}>
                <li key={data.id}>
                  <img src={data.image} alt="logo" />
                  {`${data.name} Current value: ${data.current_price} 24hour value change:${data.price_change_percentage_24h}`}
                </li>
              </Link>
              <button
                type="button"
                onClick={() => cryptoStore.saveCrypto(data)}
              >
                Save
              </button>
            </>
          ))
        ) : (
          <li>LOADING....</li>
        )}
      </ul>
    </>
  );
}

export default ListCryptoCurrencies;
