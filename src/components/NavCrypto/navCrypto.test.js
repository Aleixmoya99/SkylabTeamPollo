import React from 'react';
import NavCrypto from './NavCrypto';
import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';

describe('test NavCrypto', () => {
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

	test('should show navbar', () => {
		act(() => {
			render(<NavCrypto />, container);
		});
		expect(container).toBeInTheDocument();
	});
});
