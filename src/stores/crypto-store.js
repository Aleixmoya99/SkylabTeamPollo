import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';

const CHANGE = 'CHANGE';

const currentServerData = {
	cryptoMarkets: null,
	cryptoCoin: null,
	cryptoDerivatives: null,
	cryptoCoinSpark: [],
	savedCrypto: null
};

class CryptoData extends EventEmitter {
	getSparklineArr() {
		return currentServerData.cryptoCoinSpark;
	}

	getCryptoList() {
		return currentServerData.cryptoMarkets;
	}
	setCryptoList(param) {
		currentServerData.cryptoMarkets = param;
	}
	getCryptoCoin() {
		return currentServerData.cryptoCoin;
	}
	setCryptoCoin(param) {
		currentServerData.cryptoCoin = param;
	}

	getCryptoDerivatives() {
		return currentServerData.cryptoDerivatives;
	}
	setCryptoDerivatives(param) {
		currentServerData.cryptoDerivatives = param;
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
		!currentServerData.savedCrypto && (currentServerData.savedCrypto = []);
		currentServerData.savedCrypto.forEach((element) => {
			element.id === data.id && (flag = 1);
		});
		if (flag === 0) {
			currentServerData.savedCrypto.push(data);
		}
	}
	deleteSaveData(data) {
		for (let i = 0; i < currentServerData.savedCrypto.length; i++) {
			if (currentServerData.savedCrypto[i].id === data.id) {
				currentServerData.savedCrypto.splice(i, 1);
				break;
			}
		}
	}
	getFavoritesCryptos() {
		return currentServerData.savedCrypto;
	}
	setFavoritesCryptos(params) {
		currentServerData.savedCrypto = params;
	}
}

const cryptoData = new CryptoData();

dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOAD_CRYPTO_COIN_LIST:
			currentServerData.cryptoMarkets = action.payload;
			cryptoData.emitChange();
			break;
		case actionTypes.LOAD_CRYPTO_COIN_BY_ID:
			if (
				currentServerData.cryptoCoinSpark.length <
				currentServerData.cryptoMarkets.length
			)
				currentServerData.cryptoCoinSpark.push({
					id: action.payload.id,
					sparklines: action.payload.market_data.sparkline_7d.price
				});
			currentServerData.cryptoCoin = action.payload;
			cryptoData.emitChange();
			break;
		case actionTypes.LOAD_DERIVATIVES_LIST:
			currentServerData.cryptoDerivatives = action.payload;
			cryptoData.emitChange();
			break;
		default:
			break;
	}
});

export default cryptoData;
