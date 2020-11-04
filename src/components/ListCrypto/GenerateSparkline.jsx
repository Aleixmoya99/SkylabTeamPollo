import React, { useEffect, useState } from 'react';
import cryptoStore from '../../stores/crypto-store';
import { loadCoinById } from '../../actions/action-creators';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const currentVal = {
	id: null
};

function GenerateSparkline({ coinId }) {
	const [currentCoinId] = useState(coinId);
	let [currentCoinSparklineData, setCurrentCoinSparklineData] = useState(
		cryptoStore.getCryptoCoin()
	);

	function handleChange() {
		setCurrentCoinSparklineData(cryptoStore.getCryptoCoin());
		console.log(currentCoinSparklineData);
	}

	useEffect(() => {
		cryptoStore.addEventListener(handleChange);
		if (
			!currentCoinSparklineData ||
			currentCoinSparklineData.id !== currentCoinId
		) {
			debugger;
			loadCoinById(currentCoinId);
		}
		currentVal.id = currentCoinSparklineData;

		return () => {
			cryptoStore.removeEventListener(handleChange);
		};
	}, [currentCoinId, currentCoinSparklineData]);
	debugger;
	return (
		<td>
			{!currentCoinSparklineData ? (
				currentCoinSparklineData.id === currentCoinId ? (
					<Sparklines
						data={currentCoinSparklineData.market_data.sparkline_7d.price}
					>
						<SparklinesLine color="white" />
					</Sparklines>
				) : (
					console.log('error')
				)
			) : (
				console.log('error 2')
			)}
		</td>
	);

	// <div>

	// </div>
}

export default GenerateSparkline;

// currentCoinSparklineData.market_data.sparkline_7d.price
