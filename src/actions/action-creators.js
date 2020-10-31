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
    payload: result,
  });
}
