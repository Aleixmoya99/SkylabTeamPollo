import dispatcher from "../dispatcher/dispatcher";
import actionTypes from "./action-types";
import CoinGecko from "coingecko-api";
const coinGeckoClient = new CoinGecko();

export async function loadCoinsMarkets(show = 25, page = 0) {
  //Return an array with 25 coins market data (price, market cap, volume).
  const params = {
    order: CoinGecko.ORDER.GECKO_DESC,
    per_page: show,
    page: page,
    localization: false,
    vs_currency: "eur",
  };
  const coinMarkets = await coinGeckoClient.coins.markets({ ...params });
  dispatcher.dispatch({
    type: actionTypes.LOAD_CRYPTO_MARKETS_LIST,
    payload: coinMarkets.data,
  });
}

export async function loadCoinsList() {
  //Return and array with all existing Coins
  //Data: ids/names/symbol
  const coinList = await coinGeckoClient.coins.list();
  dispatcher.dispatch({
    type: actionTypes.LOAD_CRYPTO_COIN_LIST,
    payload: coinList,
  });
}

export async function loadCoinByID(coinId) {
  //Return data from especific coin ID
  const params = {
    tickers: false,
    community_data: false,
    developer_data: false,
    localization: false,
    sparkline: false,
  };
  const coinById = await coinGeckoClient.coins.fetch(coinId, { ...params });

  dispatcher.dispatch({
    type: actionTypes.LOAD_CRYPTO_COIN_BY_ID,
    payload: coinById,
  });
}

export async function updateCoinById(coinId) {
  //Get status updates for a given coin.
  const params = {
    per_page: 5,
  };
  const updateCoinById = await coinGeckoClient.coins.fetchStatusUpdates(
    coinId,
    {
      ...params,
    }
  );
  dispatcher.dispatch({
    type: actionTypes.UPDATE_CRYPTO_COIN_BY_ID,
    payload: updateCoinById,
  });
}

export async function updateCoinById(coinId) {
  //Get status updates for a given coin.
  const params = {
    per_page: 5,
  };
  const updateCoinById = await coinGeckoClient.coins.fetchStatusUpdates(
    coinId,
    {
      ...params,
    }
  );
  dispatcher.dispatch({
    type: actionTypes.UPDATE_CRYPTO_COIN_BY_ID,
    payload: updateCoinById,
  });
}