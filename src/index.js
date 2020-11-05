import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/normalize.css';
import './styles/index.css';
import NavCrypto from './components/NavCrypto/NavCrypto';
import ListCryptoDerivatives from './components/ListCrypto/ListCryptoDerivatives';
import FooterCrypto from './components/FooterCrypto/FooterCrypto';
import NavbarList from './components/ListCrypto/NavbarList/NavbarList';
import ListCryptoCurrencies from './components/ListCrypto/ListCryptoCurrencies';
import DetailCrypto from './components/DetailCrypto/DetailCrypto';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<NavCrypto />
			<NavbarList />
			<Switch>
				<Route
					path="/cryptocurrencies"
					exact
					component={ListCryptoCurrencies}
				/>
				<Route path="/cryptocurrencies/:id" component={DetailCrypto} />
				<Route path="/derivatives" exact component={ListCryptoDerivatives} />
			</Switch>
			<FooterCrypto />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
