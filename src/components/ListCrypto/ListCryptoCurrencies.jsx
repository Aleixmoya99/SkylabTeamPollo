import React, { useEffect, useState } from "react";
import cryptoStore from "../../stores/crypto-store";
import {
  loadCoinsMarkets,
  changeList,
  errorNoSavedCurrency,
  loadCoinsAll,
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
      loadCoinsAll();
    }
    return () => {
      cryptoStore.removeEventListener(handleChange);
    };
  }, [cryptoList]);

  return (
    <>
      <div class="mainList">
        <div class="listLegend">
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
                  document.getElementById("ErrorMsg").style.display = "inline";
                }
              } else {
                loadCoinsMarkets();
                loadCoinsAll();
                document.getElementById("ErrorMsg").style.display = "none";
              }
            }}
          />
        </div>
        <br />
        <h2 id="ErrorMsg" style={{ display: "none" }}>
          Error, no Saved Crypto
        </h2>
        <ul class="Menu">
          {cryptoList ? (
            cryptoList.map((data) => (
              <>
                <Link to={`/${data.id}`}>
                  <li id="coinList" key={data.id}>
                    <img id="logo" src={data.image.small} alt="logo" />
                    <div id="textInList">
                      <p>{`${data.name}`}</p>
                      <p id="textInEachComponent">
                        {`Current value: ${data.market_data.current_price.eur}`}
                      </p>
                      <p id="textInEachComponent">
                        {`24hour value change:${data.market_data.price_change_percentage_24h}`}
                      </p>
                    </div>
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
      </div>
    </>
  );
}

export default ListCryptoCurrencies;
