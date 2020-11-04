import dispatcher from '../dispatcher/dispatcher';
import actionTypes from './action-types';
import CoinGecko from 'coingecko-api';

const coinGeckoClient = new CoinGecko();

export async function loadCoinsAll(show = 5, curPage = 0) {
	//Return array with 25 coins global information
	// including market info
	try {
		const params = {
			order: CoinGecko.ORDER.GECKO_DESC,
			per_page: show,
			page: curPage
		};
		const coinAll = await coinGeckoClient.coins.all({ ...params });
		dispatcher.dispatch({
			type: actionTypes.LOAD_CRYPTO_COIN_LIST,
			payload: coinAll.data
		});
	} catch (error) {
		dispatcher.dispatch({
			type: actionTypes.LOADING_DATA_ERROR,
			payload: error
		});
	}
}

export async function loadCoinById(coinId) {
	//Return data from especific coin ID
	try {
		const params = {
			tickers: false,
			community_data: false,
			developer_data: false,
			localization: false,
			sparkline: true
		};
		const coinById = await coinGeckoClient.coins.fetch(coinId, { ...params });
		dispatcher.dispatch({
			type: actionTypes.LOAD_CRYPTO_COIN_BY_ID,
			payload: coinById.data
		});
	} catch (error) {
		dispatcher.dispatch({
			type: actionTypes.LOADING_DATA_ERROR,
			payload: error
		});
	}
}

export async function loadDerivativesList(show = 25, page = 0) {
	//Return an array with all derivatives exchanges
	const params = {
		order: CoinGecko.ORDER.GECKO_DESC,
		per_page: show,
		page: page
	};
	const derivativesList = await coinGeckoClient.derivatives.allExchanges({
		...params
	});
	dispatcher.dispatch({
		type: actionTypes.LOAD_DERIVATIVES_LIST,
		payload: derivativesList
	});
}
