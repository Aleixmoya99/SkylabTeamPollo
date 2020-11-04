import React from 'react';

import './BurgerMenu.css';

function BurgerMenu() {
	return (
		<>
			<input type="checkbox" />

			<i className="material-icons burger-menu">menu</i>
			<i className="material-icons burger-menu-open">menu_open</i>

			<nav>
				<ul>
					<li>
						<a href="*">Home</a>
					</li>
					<li>
						<a href="*">Cryptocurrecies</a>
					</li>
					<li>
						<a href="*">Products</a>
					</li>
					<li>
						<a href="*">Learn</a>
					</li>
					<li>
						<a href="*">Log In</a>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default BurgerMenu;
