import React from "react";
import {} from "../../actions/action-creators";
import { Sparklines } from "react-sparklines";
import cryptoStore from "../../stores/crypto-store";
import { Checkbox, Radio, Switch } from "pretty-checkbox-react";
import MakeButtonSave from "./ButtonComponent";

import "@djthoms/pretty-checkbox";
function CreateListItemCryptoCurrency({ data, key }) {
  cryptoStore.getSavedCrypto();
  cryptoStore.getCryptoList();
  return (
    <tr className="list-container" key={key}>
      <td>{`${data.market_data.market_cap_rank}`}</td>
      <td>
        <MakeButtonSave data={data} />
      </td>
      <td>
        <img src={data.image.thumb} alt="crypto-logo" />
      </td>
      <td>{`${data.name} ${data.symbol.toUpperCase()}`}</td>
      <td>{`${data.market_data.current_price.eur.toLocaleString()}€`}</td>
      <td>{`${data.market_data.price_change_percentage_24h.toFixed(2)}`}</td>
      <td>{`${data.market_data.price_change_percentage_7d.toFixed(2)}`}</td>
      <td>{`${data.market_data.market_cap.eur.toLocaleString()}`}</td>
      <td>{`${Number(
        data.market_data.circulating_supply
      ).toLocaleString()} ${data.symbol.toUpperCase()}`}</td>
    </tr>
  );
}

export default CreateListItemCryptoCurrency;
