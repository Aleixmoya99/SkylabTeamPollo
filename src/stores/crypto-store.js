import { EventEmitter } from "events";
import dispatcher from "../dispatcher/dispatcher";
import actionTypes from "../actions/action-types";

let cryptoResult;
let savedCrypto;
const CHANGE = "CHANGE";

export class CryptoData extends EventEmitter {
  getCryptoList() {
    return cryptoResult;
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
    console.log(savedCrypto);
  }
}

const cryptoData = new CryptoData();

dispatcher.register((actions) => {
  switch (actions.type) {
    case actionTypes.LOAD_CRYPTO_CURRENCY:
      cryptoResult = actions.payload;
      cryptoData.emitChange();
      break;

    default:
      break;
  }
});

export default cryptoData;
