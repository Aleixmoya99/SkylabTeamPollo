import React from 'react';
import ButtonNavList from './ButtonNavList';
import './NavbarList.css';
import { Link } from 'react-router-dom';

function NavbarList() {
	return (
		<>
			<div className="navbarlist">
				<div className="buttonNavlist">
					<ButtonNavList />
				</div>
				<div id="buttonWatchScreen" className="fas fa-star"></div>
				<div className="separate">{' | '}</div>

				<div className="buttonNav">
					<a href="cryptocurrencies">
						<input
							type="button"
							className="buttonCrypto"
							value="Cryptocurrencies"
						/>
					</a>
				</div>
				<div className="buttonNav">
					<Link to="/derivatives">
						<input
							type="button"
							className="buttonDerivatives"
							value="Derivatives"
						/>
					</Link>
				</div>
			</div>
		</>
	);
}

export default NavbarList;
