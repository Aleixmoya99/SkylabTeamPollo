import dispatcher from "../dispatcher/dispatcher";
import actionTypes from "./action-types";
import CoinGecko from "coingecko-api";
const coinGeckoClient = new CoinGecko();

export async function loadCoinsAll(show = 25, curPage = 0) {
  //Return array with 25 coins global information
  // including market info
  const params = {
    order: CoinGecko.ORDER.GECKO_DESC,
    per_page: show,
    page: curPage,
  };

  const coinAll = await coinGeckoClient.coins.all({ ...params });
  console.log(coinAll);
}

export async function loadCoinsMarkets(show = 25, curPage = 0) {
  //Return an array with 25 coins market data (price, market cap, volume).
  const params = {
    order: CoinGecko.ORDER.GECKO_DESC,
    per_page: show,
    page: curPage,
    localization: false,
    vs_currency: "eur",
  };
  const coinMarkets = await coinGeckoClient.coins.markets({ ...params });
  console.log(coinMarkets);
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

export async function loadDerivativesList(show = 25, page = 0) {
  //Return an array with all derivatives exchanges
  const params = {
    order: CoinGecko.ORDER.GECKO_DESC,
    per_page: show,
    page: page,
  };
  const derivativesList = await coinGeckoClient.derivatives.allExchanges({
    ...params,
  });
  dispatcher.dispatch({
    type: actionTypes.LOAD_DERIVATIVES_LIST,
    payload: derivativesList,
  });
}
