import React from 'react';
//import GenerateSparkline from './GenerateSparkline';
import '@djthoms/pretty-checkbox';
import cryptoStore from '../../stores/crypto-store';
import MakeButtonSave from './ButtonComponent';

function CreateListItemCryptoCurrency({ data }) {
	return (
		<tr className="list-container">
			<td>
				<MakeButtonSave data={data} />
			</td>
			<td>{`${data.market_data.market_cap_rank}`}</td>
			<td>
				<img src={data.image.thumb} alt="crypto-logo" />
			</td>
			<td>{`${data.name} ${data.symbol.toUpperCase()}`}</td>
			<td>{/*<GenerateSparkline coinId={data} />*/}</td>
			<td>{`${data.market_data.current_price.eur.toLocaleString()}€`}</td>
			<td>{`${data.market_data.price_change_percentage_24h.toFixed(2)}`}</td>
			<td>{`${data.market_data.price_change_percentage_7d.toFixed(2)}`}</td>
			<td>
				{`${cryptoStore.numFormatter(
					parseFloat(
						data.market_data.market_cap.eur.toLocaleString().replaceAll('.', '')
					)
				)}`}
				{console.log(
					data.market_data.market_cap.eur.toLocaleString().replaceAll('.', '')
				)}
			</td>
			<td>{`${cryptoStore.numFormatter(
				parseFloat(
					data.market_data.circulating_supply
						.toLocaleString()
						.replaceAll('.', '')
				)
			)} ${data.symbol.toUpperCase()}`}</td>
		</tr>
	);
}

export default CreateListItemCryptoCurrency;
