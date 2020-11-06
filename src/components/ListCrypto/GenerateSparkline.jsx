import React from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

function GenerateSparkline({ currentSparkline }) {
	return (
		<td key={currentSparkline.id}>
			<Sparklines data={currentSparkline.sparklines}>
				<SparklinesLine style={{ fill: 'none' }} color="green" limit={150} />
				<SparklinesSpots />
			</Sparklines>
		</td>
	);
}

export default GenerateSparkline;

// currentCoinSparklineData.market_data.sparkline_7d.price
