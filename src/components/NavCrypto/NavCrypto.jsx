import React from 'react';
import './NavCrypto.css';
import DropDown from './DropDown';
import InputSearch from './InputSearch';
import BtnSearch from './BtnSearch';
import BurgerMenu from './BurgerMenu';

function NavCrypto() {
	let options = {
		Home: null,
		Cryptocurrecies: null,
		Products: {
			'Where to buy': null,
			'Mobile Apps': null,
			Interest: null,
			'Jobs Board': null
		},
		Learn: {
			'Crypto basics': null,
			'How-to Guide': null,
			Glossary: null,
			FAQ: null
		},

		About: null,
		'Log In': null
	};

	let ulClass = 'navbar-desktop';

	return (
		<>
			<div class="respmenu">
				<DropDown options={options} ulClassName={ulClass} />
				<BurgerMenu />
				<BtnSearch />
				<InputSearch />
			</div>
		</>
	);
}

export default NavCrypto;
