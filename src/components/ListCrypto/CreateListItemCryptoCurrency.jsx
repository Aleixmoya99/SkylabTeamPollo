import React from 'react';
import GenerateSparkline from './GenerateSparkline';
import '@djthoms/pretty-checkbox';
import MakeButtonSave from './ButtonComponent';
import cryptoStore from './../../stores/crypto-store';
import { Link } from 'react-router-dom';

function CreateListItemCryptoCurrency({ data, sparkline }) {
	return (
		<tr className="list-container" key={data.id}>
			<td>
				<MakeButtonSave data={data} />
			</td>
			<td>
				<Link to={`/cryptocurrencies/${data.id}`}>
					{`${data.market_data.market_cap_rank}`}
				</Link>
			</td>
			<td>
				<Link to={`/cryptocurrencies/${data.id}`}>
					{`${data.name} ${data.symbol.toUpperCase()}`}
				</Link>
			</td>
			<td>
				<Link to={`/cryptocurrencies/${data.id}`}>
					<img src={data.image.thumb} alt="crypto-logo" />
				</Link>
			</td>
			<GenerateSparkline currentSparkline={sparkline} />
			<td>{`${data.market_data.current_price.eur.toLocaleString()}€`}</td>
			<td>{`${data.market_data.price_change_percentage_24h.toFixed(2)}`}</td>
			<td>{`${data.market_data.price_change_percentage_7d.toFixed(2)}`}</td>
			<td>
				{`${cryptoStore.numFormatter(
					parseFloat(
						data.market_data.market_cap.eur.toLocaleString().replaceAll('.', '')
					)
				)}`}
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
