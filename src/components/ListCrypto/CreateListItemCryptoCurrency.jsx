import React, { Fragment, useEffect, useState } from 'react';
import cryptoStore from '../../stores/crypto-store';
import { loadCoinByID } from '../../actions/action-creators';
import GenerateSparkline from './GenerateSparkline';
import '@djthoms/pretty-checkbox';
// import MakeButtonSave from './ButtonComponent';

function CreateListItemCryptoCurrency({ data }) {
	debugger;
	const [coinData] = useState(data);
	const [sparkLineData, setSparklineData] = useState(null);

	function handleChange() {
		setSparklineData(cryptoStore.getCryptoCoin());
	}

	useEffect(() => {
		cryptoStore.addEventListener(handleChange);
		if (sparkLineData === null || coinData.id !== sparkLineData.id) {
			debugger;
			loadCoinByID(coinData.id);
		}
		return () => {
			cryptoStore.removeEventListener(handleChange);
		};
	});

	return (
		<Fragment>
			<tr className="list-container">
				<td>{/* <MakeButtonSave data={data} /> */}</td>
				<td>{`${coinData.market_data.market_cap_rank}`}</td>
				<td>
					<img src={coinData.image.thumb} alt="crypto-logo" />
				</td>
				<td>{`${coinData.name} ${coinData.symbol.toUpperCase()}`}</td>
				<td>
					{sparkLineData !== null && coinData.id === sparkLineData.id && (
						<GenerateSparkline />
					)}
				</td>
				<td>{`${coinData.market_data.current_price.eur.toLocaleString()}€`}</td>
				<td>{`${coinData.market_data.price_change_percentage_24h.toFixed(
					2
				)}`}</td>
				<td>{`${coinData.market_data.price_change_percentage_7d.toFixed(
					2
				)}`}</td>
				<td>{`${coinData.market_data.market_cap.eur.toLocaleString()}`}</td>
				<td>{`${Number(
					coinData.market_data.circulating_supply
				).toLocaleString()} ${coinData.symbol.toUpperCase()}`}</td>
			</tr>
		</Fragment>
	);
}

export default CreateListItemCryptoCurrency;
