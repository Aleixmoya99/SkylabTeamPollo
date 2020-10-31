import { EventEmitter } from "events";
import dispatcher from "../dispatcher/dispatcher";
import actionTypes from "../actions/action-types";

let cryptoMarkets;
let cryptoCoins;

const CHANGE = "CHANGE";

export class CryptoData extends EventEmitter {
  getCryptoList() {
    return cryptoMarkets;
  }
  getCryptoCoin() {
    return cryptoCoins;
  }

  addEventListener(callback) {
    this.on(CHANGE, callback);
  }

  removeEventListener(callback) {
    this.removeListener(CHANGE, callback);
  }

  emitChange() {
    this.emit(CHANGE);
  }
}

const cryptoData = new CryptoData();
dispatcher.register((action) => {
  switch (action.type) {
    case actionTypes.LOAD_CRYPTO_MARKETS_LIST:
      cryptoMarkets = action.payload;
      cryptoData.emitChange();
      break;
    case actionTypes.LOAD_CRYPTO_COIN_BY_ID:
      cryptoCoins = action.payload;
      cryptoData.emitChange();
      break;
    default:
      break;
  }
});

export default cryptoData;
