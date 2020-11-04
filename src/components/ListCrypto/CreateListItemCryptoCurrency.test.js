import React from 'react';
import CreateListItemCryptoCurrency from './CreateListItemCryptoCurrency';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
describe('Test Create List Item component', () => {
	let container = null;
	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
	});
	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	});
	test('Should return table row with columns', () => {
		//act
		act(() => {
			render(<CreateListItemCryptoCurrency />, container);
		});
		//assert
		expect(container.innerHTML).toHaveBeenCalled();
	});
});
