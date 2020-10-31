import React, { useEffect, useState } from "react";
import CryptoStore from "../../stores/crypto-store";
import { loadCoinByID } from "../../actions/action-creators";

function CryptoDetail() {
  const [cryptoCoin, setCryptCoin] = useState(null);

  function handleChange() {
    setCryptCoin(CryptoStore.getCryptoCoin());
  }

  useEffect(() => {
    CryptoStore.addEventListener(handleChange);
    if (!cryptoCoin) {
      loadCoinByID("bitcoin");
    }
    return () => {
      CryptoStore.removeEventListener(handleChange);
    };
  }, [cryptoCoin]);

  return (
    <>
      {cryptoCoin ? (
        <section>
          <figure>
            <img src={cryptoCoin.data.image.small} alt="crypto__logo" />
            <figcaption>{cryptoCoin.data.name}</figcaption>
          </figure>
          <div>
            <span>
              € {cryptoCoin.data.market_data.current_price.eur}(
              {cryptoCoin.data.market_data.price_change_percentage_24h.toFixed(
                2
              )}
              %)
            </span>
            <span>
              $ {cryptoCoin.data.market_data.current_price.usd}(
              {cryptoCoin.data.market_data.price_change_percentage_24h.toFixed(
                2
              )}
              %)
            </span>
          </div>
          <div>
            <ul>
              <li>Rank {cryptoCoin.data.coingecko_rank}</li>
              <li>
                <a href={cryptoCoin.data.links.homepage[0]}>Home Page</a>
              </li>
              <li>Change in 24H</li>
              <li>Change in 30D</li>
              <li>Change in 1Y</li>
              <li></li>
            </ul>
          </div>
        </section>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default CryptoDetail;
