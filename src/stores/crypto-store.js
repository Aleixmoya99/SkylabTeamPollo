import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';
import { loadCoinsAll } from '../actions/action-creators';

let savedCrypto, cryptoMarkets, cryptoCoin, cryptoDerivatives;

const CHANGE = 'CHANGE';

class CryptoData extends EventEmitter {
<<<<<<< HEAD
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
=======
  getCryptoList() {
    return cryptoMarkets;
  }
  setCryptoList(param) {
    cryptoMarkets = param;
  }
  getCryptoCoin() {
    return cryptoCoin;
  }
  setCryptoCoin(param) {
    cryptoCoin = param;
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
>>>>>>> 2e263897a4c92b762f01159443f929428515d437

	removeEventListener(callback) {
		this.removeListener(CHANGE, callback);
	}

<<<<<<< HEAD
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
	/*roundNumbers(num, locale = "en") {
    // Nine Zeroes for Billions
    return Math.abs(Number(num)) >= 1.0e9
      ? Math.round(Math.abs(Number(num)) / 1.0e9) + " B"
      : // Six Zeroes for Millions
      Math.abs(Number(num)) >= 1.0e6
      ? Math.round(Math.abs(Number(num)) / 1.0e6) + " M"
      : // Three Zeroes for Thousands
      Math.abs(Number(num)) >= 1.0e3
      ? Math.round(Math.abs(Number(num)) / 1.0e3) + " K"
      : Math.abs(Number(num));
  }*/
=======
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
>>>>>>> 2e263897a4c92b762f01159443f929428515d437
}

const cryptoData = new CryptoData();

dispatcher.register((action) => {
<<<<<<< HEAD
	switch (action.type) {
		case actionTypes.LOAD_CRYPTO_COIN_LIST:
			cryptoMarkets = action.payload;
			loadCoinsAll();
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
=======
  switch (action.type) {
    case actionTypes.LOAD_CRYPTO_COIN_LIST:
      cryptoMarkets = action.payload;
      cryptoData.emitChange();
      break;
    case actionTypes.LOAD_CRYPTO_COIN_BY_ID:
      cryptoCoin = action.payload;
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
>>>>>>> 2e263897a4c92b762f01159443f929428515d437
});

export default cryptoData;
