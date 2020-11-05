import React, { useEffect, useState } from 'react';
import './ListCrypto.css';
import cryptoStore from '../../stores/crypto-store';
import { loadCoinsAll, loadCoinById } from '../../actions/action-creators';
import CreateListItem from './CreateListItemCryptoCurrency';

function ListCryptoCurrencies() {
	const [cryptoList, setCryptoList] = useState(null);
	const [currentSparklines, setCurrentSparkline] = useState(null);

	useEffect(() => {
		function handleChange() {
			cryptoList && setCurrentSparkline(cryptoStore.getSparklineArr());
			!cryptoList && setCryptoList(cryptoStore.getCryptoList());
		}
		cryptoStore.addEventListener(handleChange);
		cryptoList &&
			!currentSparklines &&
			(async () => {
				await cryptoList.forEach((data) => loadCoinById(data.id));
			})();
		!cryptoList &&
			(async () => {
				await loadCoinsAll();
			})();
		return () => {
			cryptoStore.removeEventListener(handleChange);
		};
	}, [cryptoList, currentSparklines]);

	return (
		<>
			{cryptoList && currentSparklines && (
				<section className="currencies-list">
					<table className="table-container">
						<caption>Crypto Currencies</caption>
						<thead className="table-headings">
							<tr>
								<th className="fix-column"></th>
								<th>Rank</th>
								<th></th>
								<th>Name</th>
								<td>Sparklineaaaaaaa</td>
								<th>Price</th>
								<th>24h</th>
								<th>7d</th>
								<th>Market Cap</th>
								<th>Circulating Supply</th>
							</tr>
						</thead>
						<tbody>
							{currentSparklines.length === cryptoList.length &&
								cryptoList.map((data, index) => {
									return (
										<CreateListItem
											data={data}
											sparkline={currentSparklines[index]}
											key={index}
										/>
									);
								})}
						</tbody>
					</table>
				</section>
			)}
		</>
	);
}

export default ListCryptoCurrencies;
