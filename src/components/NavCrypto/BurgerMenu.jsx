import React from 'react';

import './BurgerMenu.css';

function BurgerMenu() {
	return (
		<>
			<input type="checkbox" />
			<i class="material-icons burger-menu">menu</i>
			<i class="material-icons burger-menu-open">menu_open</i>

			<nav>
				<ul>
					<li>
						<a href="cryptocurrency">Home</a>
					</li>
					<li>
						<a href="cryptocurrency">Cryptocurrecies</a>
					</li>
					<li>
						<a href="cryptocurrency">Products</a>
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
