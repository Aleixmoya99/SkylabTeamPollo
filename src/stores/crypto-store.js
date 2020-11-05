import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';

const CHANGE = 'CHANGE';

const currentServerData = {
	cryptoMarkets: null,
	cryptoCoin: null,
	cryptoDerivatives: null,
	cryptoCoinSpark: []
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
