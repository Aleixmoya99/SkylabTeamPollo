import React, { useEffect, useState } from "react";
import cryptoStore from "../../stores/crypto-store";
import { loadCoinsMarkets, changeList } from "../../actions/action-creators";
import { Link } from "react-router-dom";
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
      <h1>Hola Gilberto</h1>
      Check:
      <input
        type="checkBox"
        id="thisCheckBox"
        onClick={() => {
          if (document.getElementById("thisCheckBox").checked) {
            if (cryptoStore.getSavedCrypto()) {
              changeList();
            } else {
              //code goes here
            }
          } else {
            loadCoinsMarkets();
          }
        }}
      />
      <ul class="Menu">
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

export default CryptoList;
