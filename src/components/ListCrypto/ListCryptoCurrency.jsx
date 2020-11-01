import React, { useEffect, useState } from "react";
import cryptoStore from "../../stores/crypto-store";
import { loadCoinsMarkets } from "../../actions/action-creators";
import { Link } from "react-router-dom";
var e, selector;
function CryptoList() {
  const [cryptoList, setCryptoList] = useState(cryptoStore.getCryptoList());
  const [savedCryptoList, setSavedCryptoList] = useState(
    cryptoStore.getSavedCrypto()
  );
  function handleChange() {
    setCryptoList(cryptoStore.getCryptoList());
    setSavedCryptoList(cryptoStore.getSavedCrypto());
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
      <select id="Filter">
        <option id="op1" value="1" text="noFilter" selected="selected">
          None
        </option>
        <option id="op2" value="2" text="savedFilter">
          Saved
        </option>
      </select>
      <button
        onClick={() => {
          e = document.getElementById("Filter").value;
          if (e === "1") {
            selector = true;
          } else {
            selector = false;
          }
          return selector;
        }}
      >
        Apply
      </button>
      <ul
        class="Menu"
        style={{
          display: selector ? "block" : "none",
        }}
      >
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
      <ul
        class="saveMenu"
        style={{
          display: !selector ? "none" : "block",
        }}
      >
        {savedCryptoList ? (
          savedCryptoList.map((data) => (
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
