import React, { useEffect, useState } from 'react';
import './ListCrypto.css';
import cryptoStore from '../../stores/crypto-store';
import { loadCoinsAll, loadCoinById } from '../../actions/action-creators';
import CreateListItem from './CreateListItemCryptoCurrency';

function ListCryptoCurrencies() {
	const [cryptoList, setCryptoList] = useState(cryptoStore.getCryptoList());

	function handleChange() {
		setCryptoList(cryptoStore.getCryptoList());
	}
	useEffect(() => {
		cryptoStore.addEventListener(handleChange);
		if (!cryptoList) {
			loadCoinsAll();
		}
		return () => {
			cryptoStore.removeEventListener(handleChange);
		};
	}, [cryptoList]);

	return (
		<>
			<section className="currencies-list">
				<table className="table-container">
					<caption>Crypto Currencies</caption>
					<thead className="table-headings">
						<tr>
							<th className="fix-column"></th>
							<th>Rank</th>
							<th></th>
							<th>Name</th>
							<td>Sparkline</td>
							<th>Price</th>
							<th>24h</th>
							<th>7d</th>
							<th>Market Cap</th>
							<th>Circulating Supply</th>
						</tr>
					</thead>
					<tbody>
						{cryptoList &&
							cryptoList.map((data, index) => {
								loadCoinById(data.id);
								return <CreateListItem data={data} key={index} />;
							})}
					</tbody>
				</table>
			</section>
		</>
	);
}

export default ListCryptoCurrencies;
