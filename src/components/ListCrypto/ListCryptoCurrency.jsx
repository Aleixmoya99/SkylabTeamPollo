import React, { useEffect, useState } from "react";
import CryptoStore from "../../stores/crypto-store";
import { loadCryptoCurrency } from "../../actions/action-creators";
import { Link } from "react-router-dom";

var filterName;
var select;
if (filterName) {
  filterName = document.getElementById("Filter");
  select = filterName.value;
}
function CryptoList() {
  const [cryptoList, setCryptoList] = useState(CryptoStore.getCryptoList());
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
      <select id="Filter">
        <option value="1" selected="selected">
          None
        </option>
        <option value="2">Saved</option>
      </select>

      <ul>
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
    </>
  );
}

export default CryptoList;
