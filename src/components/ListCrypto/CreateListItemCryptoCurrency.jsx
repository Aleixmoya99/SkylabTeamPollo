import React, { useEffect, useState } from "react";
import cryptoStore from "../../stores/crypto-store";
import { loadCoinByID } from "../../actions/action-creators";
import { Sparklines, SparklinesLine } from "react-sparklines";

function CreateListItemCryptoCurrency({ data, id }) {
  const [coinSparklines, setCoinSparklines] = useState(
    cryptoStore.getCryptoCoin()
  );
  function handleChange() {
    setCoinSparklines(cryptoStore.getCryptoCoin());
  }

  useEffect(() => {
    cryptoStore.addEventListener(handleChange);
    if (!coinSparklines) {
      const currentCoin = data.id;
      debugger;
      console.log(currentCoin);
      loadCoinByID(currentCoin);
    }
    return () => {
      cryptoStore.removeEventListener(handleChange);
    };
  }, [coinSparklines]);

  return (
    <tr className="list-container" key={id}>
      <td>
        <span className="far fa-star"></span>
      </td>
      <td>{`${data.market_data.market_cap_rank}`}</td>
      <td>
        <img src={data.image.thumb} alt="crypto-logo" />
      </td>
      <td>{`${data.name} ${data.symbol.toUpperCase()}`}</td>
      <td>
        {data.id}
        {/* <Sparklines data={coinSparklines.market_data.sparkline_7d.price}>
          <SparklinesLine
            color="red"
            limit={20}
            width={100}
            height={40}
            margin={10}
          />
        </Sparklines> */}
      </td>
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
