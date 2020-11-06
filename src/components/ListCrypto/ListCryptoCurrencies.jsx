import React, { useEffect, useState } from 'react';
import './ListCrypto.css';
import cryptoStore from '../../stores/crypto-store';
import { loadCoinsAll, loadCoinById } from '../../actions/action-creators';
import CreateListItem from './CreateListItemCryptoCurrency';

function ListCryptoCurrencies() {
	const [cryptoList, setCryptoList] = useState(null);
	const [currentSparklines, setCurrentSparkline] = useState(null);

	function handleChange() {
		setCurrentSparkline(cryptoStore.getSparklineArr());
		setCryptoList(cryptoStore.getCryptoList());
	}

	useEffect(() => {
		cryptoStore.addEventListener(handleChange);
		cryptoList &&
			(async () => {
				await cryptoList.forEach(async (data) => await loadCoinById(data.id));
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
								<th></th>
								<th>Rank</th>
								<th>Name</th>
								<th></th>
								<th className="table-sparkline">Last 7 Days</th>
								<th>Price</th>
								<th>24h</th>
								<th>7d</th>
								<th>Market Cap</th>
								<th>Circulating Supply</th>
							</tr>
						</thead>
						<tbody className="table-cols">
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
