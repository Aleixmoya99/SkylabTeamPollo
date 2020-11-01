import React, { useEffect, useState } from "react";
import CryptoStore from "../../stores/crypto-store";
import { loadCryptoCurrency } from "../../actions/action-creators";
import { Link } from "react-router-dom";
var e, selector;
function CryptoList() {
  const [cryptoList, setCryptoList] = useState(CryptoStore.getCryptoList());
  const [savedCryptoList, setSavedCryptoList] = useState(
    CryptoStore.getSavedCrypto()
  );
  function handleChange() {
    setCryptoList(CryptoStore.getCryptoList());
    setSavedCryptoList(CryptoStore.getSavedCrypto());
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
                  <img src={data.image} />
                  {`${data.name} Current value: ${data.current_price} 24hour value change:${data.price_change_percentage_24h}`}
                </li>
              </Link>
              <button
                type="button"
                onClick={() => CryptoStore.saveCrypto(data)}
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
                  <img src={data.image} />
                  {`${data.name} Current value: ${data.current_price} 24hour value change:${data.price_change_percentage_24h}`}
                </li>
              </Link>
              <button
                type="button"
                onClick={() => CryptoStore.saveCrypto(data)}
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
