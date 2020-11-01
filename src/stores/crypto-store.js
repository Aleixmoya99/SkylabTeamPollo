import { EventEmitter } from "events";
import dispatcher from "../dispatcher/dispatcher";
import actionTypes from "../actions/action-types";

let savedCrypto;
let cryptoMarkets;
let cryptoCoins;
let cryptoDerivatives;

const CHANGE = "CHANGE";

export class CryptoData extends EventEmitter {
  getCryptoList() {
    return cryptoMarkets;
  }
  getCryptoCoin() {
    return cryptoCoins;
  }
  getSavedCrypto() {
    return savedCrypto;
  }
  getCryptoDerivatives() {
    return cryptoDerivatives;
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
  saveCrypto(data) {
    var flag = 0;
    if (!savedCrypto) {
      savedCrypto = [];
    }
    savedCrypto.forEach((element) => {
      if (element === data) {
        flag = 1;
      }
    });
    if (flag === 0) {
      savedCrypto.push(data);
    }
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
    case actionTypes.LOAD_DERIVATIVES_LIST:
      cryptoDerivatives = action.payload;
      cryptoData.emitChange();
      break;
    default:
      break;
  }
});

export default cryptoData;
