import dispatcher from "../dispatcher/dispatcher";
import actionTypes from "./action-types";
import CoinGecko from "coingecko-api";
const coinGeckoClient = new CoinGecko();

export async function loadCryptoCurrency() {
  const params = {
    order: CoinGecko.ORDER.MARKET_CAP_DESC,
  };
  const result = await coinGeckoClient.coins.markets({ params });
  dispatcher.dispatch({
    type: actionTypes.LOAD_CRYPTO_CURRENCY,
    payload: result.data,
  });
}

export async function loadCryptoCoin(slug) {
  const url = {
    url: `https://api.coingecko.com/api/v3/coins/${slug}?tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`,
  };
  const coinData = await coinGeckoClient.coins.fetch({ url });
  dispatcher.dispatch({
    type: actionTypes.LOAD_CRYPTO_COIN,
    payload: coinData,
  });
}
