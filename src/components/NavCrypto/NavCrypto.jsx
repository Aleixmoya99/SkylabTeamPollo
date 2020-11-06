import React, { useEffect, useState } from 'react';
import './NavCrypto.css';
import DropDown from './DropDown';
import InputSearch from './InputSearch';
import BtnSearch from './BtnSearch';
import BurgerMenu from './BurgerMenu';
import { signOut, signInWithGoogle } from '../../actions/auth-actions';
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
				<div className="ButtonsLog">
					<button
						className="loginButton"
						type="button"
						onClick={(event) => {
							event.preventDefault();
							signInWithGoogle();
						}}
					>
						Login
					</button>
				</div>
			</>
		);
	}
	function isSignInVisible() {
		return user ? (
			<button
				className="signOutButton"
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

		About: null
	};

	let ulClass = 'navbar-desktop';
	return (
		<>
			<div className="respmenu">
				<DropDown options={options} ulClassName={ulClass} />
				<BurgerMenu />
				<BtnSearch />

				{isSignInVisible()}
				{user && <span className="wellcome">Welcome {user.displayName}</span>}

				<InputSearch />
			</div>
		</>
	);
}

export default NavCrypto;
