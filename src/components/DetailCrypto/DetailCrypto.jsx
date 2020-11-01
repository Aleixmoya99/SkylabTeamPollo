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
      loadCoinByID("ethereum");
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
            <span>{cryptoCoin.data.symbol}</span>
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
              <li>Social Media</li>
              <li>Codigo fuente</li>
              <li>
                max_supply {cryptoCoin.data.market_data.total_supply} coins
              </li>
              <li>
                circulating_supply{" "}
                {cryptoCoin.data.market_data.circulating_supply} coins
              </li>
            </ul>
          </div>

          <div className="description">{cryptoCoin.data.description.en}</div>
        </section>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default CryptoDetail;
