import React, { useEffect, useState } from 'react';
import './NavCrypto.css';
import DropDown from './DropDown';
import InputSearch from './InputSearch';
import BtnSearch from './BtnSearch';
import BurgerMenu from './BurgerMenu';
import {
	signOut,
	signInWithEmail,
	signInWithGoogle
} from '../../actions/auth-actions';
import authStore from '../../stores/auth_store';

function NavCrypto() {
	const [user, setUser] = useState(authStore.getUser);

	function handleChange() {
		setUser(authStore.getUser());
	}

	useEffect(() => {
		authStore.addEventListener(handleChange);

		return () => {
			authStore.removeEventListener(handleChange);
		};
	});

	function getSignInButtons() {
		return (
			<>
				<button
					type="button"
					onClick={(event) => {
						event.preventDefault();
						signInWithEmail('deadsoulgamer@gmail.com', '1234567');
					}}
				>
					Email/Password
				</button>
				{' | '}
				<button
					type="button"
					onClick={(event) => {
						event.preventDefault();
						signInWithGoogle();
					}}
				>
					Google
				</button>
				;
			</>
		);
	}
	function isSignInVisible() {
		return user ? (
			<button
				type="button"
				onClick={(event) => {
					event.preventDefault();
					signOut();
				}}
			>
				Sign Out
			</button>
		) : (
			getSignInButtons()
		);
	}

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
			<div className="respmenu">
				<DropDown options={options} ulClassName={ulClass} />
				<BurgerMenu />
				{isSignInVisible()}
				{user && (
					<span>
						{' | '}
						Welcome {user.email}
					</span>
				)}
				<BtnSearch />
				<InputSearch />
			</div>
		</>
	);
}

export default NavCrypto;
