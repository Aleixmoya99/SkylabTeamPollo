import React from 'react';
import cryptoStore from '../../stores/crypto-store';
import { Sparklines } from 'react-sparklines';

function GenerateSparkline({ coinId }) {
	debugger;
	return (
		<td>
			<Sparklines
				data={cryptoStore.getSparklineData(coinId)}
				limit={5}
				width={100}
				height={20}
				margin={5}
			></Sparklines>
		</td>
	);
}

export default GenerateSparkline;

// currentCoinSparklineData.market_data.sparkline_7d.price
