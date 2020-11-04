import React from 'react';
import ListCryptoCurrencies from './ListCryptoCurrencies';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';

import '@djthoms/pretty-checkbox';
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
	test('testing list', () => {
		act(() => {
			render(
				<BrowserRouter>
					<ListCryptoCurrencies />
				</BrowserRouter>,
				container
			);
		});
		expect(container).toBeDefined();
	});

	test('button is defined', () => {
		const onClick = jest.fn();
		act(() => {
			render(<ListCryptoCurrencies onClick={onClick} />, container);
		});

		// get ahold of the button element, and trigger some clicks on it
		const button = document.querySelector('[data-testid="toggle"]');
		expect(button).toBeDefined();
	});

	test('changes value when clicked', () => {
		act(() => {
			render(<ListCryptoCurrencies />, container);
			const click = document.querySelector('#thisCheckBox');
			click.dispatchEvent(new MouseEvent('click', { bubbles: true }));
		});
		expect(document.getElementById('thisCheckBox')).toBeChecked();
	});
});
