import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';

let savedCrypto, cryptoMarkets, cryptoCoin, cryptoDerivatives;

const CHANGE = 'CHANGE';

class CryptoData extends EventEmitter {
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
		if (flag === 0) {
			savedCrypto.push(data);
		}
		console.log(savedCrypto);
	}
	deleteSaveData(data) {
		for (let i = 0; i < savedCrypto.length; i++) {
			if (savedCrypto[i].id === data.id) {
				savedCrypto.splice(i, 1);
				break;
			}
		}
		console.log(savedCrypto);
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
		case actionTypes.LOAD_CRYPTO_COIN_LIST:
			cryptoMarkets = action.payload;
			cryptoData.emitChange();
			break;
		case actionTypes.LOAD_CRYPTO_COIN_BY_ID:
			debugger;
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
});

export default cryptoData;
