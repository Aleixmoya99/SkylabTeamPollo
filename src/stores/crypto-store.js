import { EventEmitter } from "events";
import dispatcher from "../dispatcher/dispatcher";
import actionTypes from "../actions/action-types";

let savedCrypto, cryptoMarkets, cryptoCoins, cryptoDerivatives;

const CHANGE = "CHANGE";

export class CryptoData extends EventEmitter {
  getCryptoList() {
    return cryptoMarkets;
  }
  setCryptoList(param) {
    cryptoMarkets = param;
  }
  getCryptoCoin() {
    return cryptoCoins;
  }
  setCryptoCoin(param) {
    cryptoCoins = param;
  }
  getSavedCrypto() {
    return savedCrypto;
  }
  setSavedCrypto(param) {
    savedCrypto = param;
  }
  getCryptoDerivatives() {
    return cryptoDerivatives;
  }
  setCryptoDerivatives(param) {
    cryptoDerivatives = param;
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
    let flag = 0;
    !savedCrypto && (savedCrypto = []);
    savedCrypto.forEach((element) => {
      element.id === data.id && (flag = 1);
    });
    flag === 0 && savedCrypto.push(data);
  }
  getFavoritesCryptos() {
    return savedCrypto;
  }
  setFavoritesCryptos(params) {
    savedCrypto = params;
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
    case actionTypes.CHANGE_LIST:
      cryptoMarkets = savedCrypto;
      cryptoData.emitChange();
      break;
    case actionTypes.ERROR_NO_SAVEDCURRENCY:
      cryptoMarkets = [];
      cryptoData.emitChange();
      break;
    default:
      break;
  }
});

export default cryptoData;
