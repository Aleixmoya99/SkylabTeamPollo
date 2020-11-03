import React, { useEffect, useState } from "react";
import cryptoStore from "../../stores/crypto-store";
import {
  loadCoinsMarkets,
  changeList,
  errorNoSavedCurrency,
  loadCoinsAll,
  loadCoinByID,
} from "../../actions/action-creators";
import CreateListItem from "./CreateListItemCryptoCurrency";
import { Link } from "react-router-dom";
import { Sparklines, SparklinesBars } from "react-sparklines";
import { Switch } from "pretty-checkbox-react";

import "@djthoms/pretty-checkbox";
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
      loadCoinByID("bitcoin");
    }
    return () => {
      cryptoStore.removeEventListener(handleChange);
    };
  }, [cryptoList]);

  return (
    <>
      <div class="mainList">
        <div class="listLegend">
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
        <section className="currencies-table">
          <table className="table-container">
            <Sparklines data={[5, 10, 5, 20]}>
              <SparklinesBars />
            </Sparklines>
            <caption>Crypto Currencies</caption>
            <tr className="table-headings">
              <th>Rank</th>
              <th>Save</th>
              <th>Name</th>
              <th></th>
              <th>Price</th>
              <th>24h</th>
              <th>7d</th>
              <th>Market Cap</th>
              <th>Circulating Supply</th>
            </tr>
            {cryptoList ? (
              cryptoList.map((data, index) => (
                <CreateListItem data={data} key={index} />
              ))
            ) : (
              <div>LOADING....</div>
            )}
          </table>
        </section>
      </div>
    </>
  );
}

export default ListCryptoCurrencies;
