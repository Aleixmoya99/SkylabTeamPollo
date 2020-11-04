import cryptoData from './crypto-store';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';

describe('test crypto-store', () => {
	test('testing get crypto list', () => {
		cryptoData.setCryptoList('hola');
		expect(cryptoData.getCryptoList()).toEqual('hola');
	});
	test('testing get crypto coin', () => {
		cryptoData.setCryptoCoin([]);
		expect(cryptoData.getCryptoCoin()).toEqual([]);
	});
	test('testing get saved crypto', () => {
		cryptoData.setSavedCrypto([]);
		expect(cryptoData.getSavedCrypto()).toEqual([]);
	});
	test('testing get derivatives crypto', () => {
		cryptoData.setCryptoDerivatives([]);
		expect(cryptoData.getCryptoDerivatives()).toEqual([]);
	});

	test('testing if saved crypto', () => {
		//arrange
		cryptoData.saveCrypto({ id: '1' });
		//assert
		expect(cryptoData.getFavoritesCryptos()).toEqual([{ id: '1' }]);
	});
	test('testing saved crypto', () => {
		const response = cryptoData.saveCrypto(cryptoData);
		expect(response).toEqual();
	});

	test('testing get favorites crypto', () => {
		cryptoData.setFavoritesCryptos('run test');
		expect(cryptoData.getFavoritesCryptos()).toEqual('run test');
	});

	test('load crypto coin list', () => {
		dispatcher.dispatch({
			type: actionTypes.LOAD_CRYPTO_COIN_LIST,
			payload: 'run test'
		});
		expect(cryptoData.getCryptoList()).toEqual('run test');
	});

	test('load crypto coins by id', () => {
		dispatcher.dispatch({
			type: actionTypes.LOAD_CRYPTO_COIN_BY_ID,
			payload: 'run test'
		});
		expect(cryptoData.getCryptoCoin()).toEqual('run test');
	});

	test('load derivates list', () => {
		dispatcher.dispatch({
			type: actionTypes.LOAD_DERIVATIVES_LIST,
			payload: 'run test'
		});
		expect(cryptoData.getCryptoDerivatives()).toEqual('run test');
	});

	test('change list', () => {
		dispatcher.dispatch({
			type: actionTypes.CHANGE_LIST,
			payload: 'run test'
		});
		expect(cryptoData.getFavoritesCryptos()).toEqual('run test');
	});

	test('error no saved coin', () => {
		dispatcher.dispatch({
			type: actionTypes.ERROR_NO_SAVEDCURRENCY
		});
		expect(cryptoData.getCryptoList()).toEqual([]);
	});

	it('should use the default case when the action type dos not exist', () => {
		let action = {
			type: actionTypes.RENAME_GROUP,
			data: { groupName: 'Lobos Street' }
		};
		dispatcher.dispatch(action);
		expect(cryptoData).toBeTruthy();
	});
	test('Should return an element of an array by there id', () => {
		const response = [1, 2, 3, 4];
		const getSparklineInfo = (index) => {
			return response[index];
		};
		expect(getSparklineInfo(2)).toEqual(3);
	});
});
