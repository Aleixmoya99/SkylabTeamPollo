import { EventEmitter } from "events";
import dispatcher from "../dispatcher/dispatcher";
import actionTypes from "../actions/action-types";

let cryptoResult;
let coin;

const CHANGE = "CHANGE";

export class CryptoData extends EventEmitter {
  getCryptoList() {
    return cryptoResult;
  }

  getCryptoCoin() {
    return coin;
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
    case actionTypes.LOAD_CRYPTO_CURRENCY:
      cryptoResult = action.payload;
      cryptoData.emitChange();
      break;
    case actionTypes.LOAD_CRYPTO_COIN:
      coin = action.payload;
      cryptoData.emitChange();

      break;
    default:
      break;
  }
});

export default cryptoData;
