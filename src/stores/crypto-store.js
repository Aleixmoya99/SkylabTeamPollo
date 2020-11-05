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
	numFormatter(num) {
		let val = 0;
		//debugger;
		if (num > 999) {
			val = 1;
		}
		if (num > 1000000) {
			val = 2;
		}
		if (num > 1000000000) {
			val = 3;
		}
		if (num > 1000000000000) {
			val = 4;
		}
		if (num > 1000000000000000) {
			val = 5;
		}
		if (num > 1000000000000000000) {
			val = 6;
		}
		if (num > 1000000000000000000000) {
			val = 7;
		}
		if (num > 1000000000000000000000000) {
			val = 8;
		}
		switch (val) {
			case 1:
				return (num / 1000).toFixed(0) + 'K ';
			case 2:
				return (num / 1000000).toFixed(0) + 'M ';
			case 3:
				return (num / 1000000000).toFixed(0) + 'B';
			case 4:
				return (num / 1000000000000).toFixed(0) + 'KB';
			case 5:
				return (num / 1000000000000000).toFixed(0) + 'MB';
			case 6:
				return (num / 1000000000000000000).toFixed(0) + 'BB';
			case 7:
				return (num / 1000000000000000000000).toFixed(0) + 'KBB';
			case 8:
				return (num / 1000000000000000000000000).toFixed(0) + 'MBB';
			default:
				return num;
		}
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
	}
	deleteSaveData(data) {
		for (let i = 0; i < savedCrypto.length; i++) {
			if (savedCrypto[i].id === data.id) {
				savedCrypto.splice(i, 1);
				break;
			}
		}
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
