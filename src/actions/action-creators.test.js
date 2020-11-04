import {
	loadCoinsAll,
	loadCoinByID,
	loadDerivativesList,
	changeList,
	errorNoSavedCurrency
} from './action-creators';
import dispatcher from '../dispatcher/dispatcher';

jest.mock('../dispatcher/dispatcher');

describe('actions creator', () => {
	test('load coins id', async () => {
		await loadCoinByID();

		const calls = dispatcher.dispatch.mock.calls[0].length;
		expect(calls).toBe(1);
	});

	test('load derivatives coins', async () => {
		await loadDerivativesList();

		const calls = dispatcher.dispatch.mock.calls[0];
		expect(typeof calls).toBe('object');
	});

	test('should load derivatives coins', async () => {
		await loadDerivativesList();

		const calls = dispatcher.dispatch.mock.calls[0][0];
		expect(calls.payload.data[0].name).toBe('Binance (Futures)');
	});

	test('change coins list', async () => {
		await changeList();

		const calls = dispatcher.dispatch.mock.calls[0].length;
		expect(calls).toBe(1);
	});

	test('error no saved currency', async () => {
		await errorNoSavedCurrency();

		const calls = dispatcher.dispatch.mock.calls[0].length;
		expect(calls).toBe(1);
	});

	test('load all coins', async () => {
		await loadCoinsAll();

		const calls = dispatcher.dispatch.mock.calls[0].length;
		expect(calls).toBe(1);
	});
});
