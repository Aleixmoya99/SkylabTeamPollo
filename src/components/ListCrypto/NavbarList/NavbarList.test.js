import React from 'react';
import NavbarList from './NavbarList';
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
			render(<NavbarList />, container);
		});
		expect(container).toBeInTheDocument();
	});
});
