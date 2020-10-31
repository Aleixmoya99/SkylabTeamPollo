import { EventEmitter } from "events";
import dispatcher from "../dispatcher/dispatcher";
import actionTypes from "../actions/action-types";

let cryptoResult = [];

export class CryptoData extends EventEmitter {
  getCrytoList() {
    return cryptoResult;
  }

  addEventListener(callback) {
    this.on("CHANGE", callback);
  }

  removeEventListener(callback) {
    this.removeEventListener("CHANGE", callback);
  }

  emitChange() {
    this.emit("CHANGE");
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
