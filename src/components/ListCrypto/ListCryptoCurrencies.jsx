import React, { useEffect, useState } from "react";
import "./ListCrypto.css";
import cryptoStore from "../../stores/crypto-store";
import {
  changeList,
  errorNoSavedCurrency,
  loadCoinsAll,
} from "../../actions/action-creators";
import CreateListItem from "./CreateListItemCryptoCurrency";
<<<<<<< HEAD

=======
import { Link } from "react-router-dom";
import { Sparklines, SparklinesBars } from "react-sparklines";
import { Switch } from "pretty-checkbox-react";

import "@djthoms/pretty-checkbox";
>>>>>>> 4b5143f5d8ac44b614fcead6e3cd4a921240a4a5
function ListCryptoCurrencies() {
  const [cryptoList, setCryptoList] = useState(cryptoStore.getCryptoList());

  function handleChange() {
    setCryptoList(cryptoStore.getCryptoList());
  }
  useEffect(() => {
    cryptoStore.addEventListener(handleChange);
    if (!cryptoList) {
      loadCoinsAll();
    }
    return () => {
      cryptoStore.removeEventListener(handleChange);
    };
  }, [cryptoList]);

  return (
    <>
      <div className="mainList">
        <div className="listLegend">
          Show Saved:
          <Switch
            shape="fill"
            color="primary"
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
        <section className="currencies-list">
          <table className="table-container">
            <caption>Crypto Currencies</caption>
            <thead className="table-headings">
              <tr>
                <th className="fix-column"></th>
                <th>Rank</th>
                <th></th>
                <th>Name</th>
                <td>Sparkline</td>
                <th>Price</th>
                <th>24h</th>
                <th>7d</th>
                <th>Market Cap</th>
                <th>Circulating Supply</th>
              </tr>
            </thead>
            <tbody>
              {cryptoList &&
                cryptoList.map((data, index) => {
                  return <CreateListItem data={data} key={index} />;
                })}
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
}

export default ListCryptoCurrencies;
