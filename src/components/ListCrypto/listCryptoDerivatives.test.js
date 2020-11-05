import React from 'react';
import ListCryptoDerivatives from './ListCryptoDerivatives';
import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

describe('test ListCryptoCurrencies', () => {
	let container;

	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
	});

	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	});

	test('testing list', async () => {
		await act(async () => {
			render(
				<BrowserRouter>
					<ListCryptoDerivatives />
				</BrowserRouter>,
				container
			);
		});
		expect(container).toBeInTheDocument();
	});
});
