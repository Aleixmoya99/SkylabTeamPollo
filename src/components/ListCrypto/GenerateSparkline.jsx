import React from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

function GenerateSparkline({ currentSparkline }) {
	return (
		<td key={currentSparkline.id}>
			<Sparklines
				data={currentSparkline.sparklines}
				style={{ fill: 'none' }}
				limit={167}
				width={100}
				height={50}
				margin={1}
			>
				<SparklinesLine color="blue" />
			</Sparklines>
			<Sparklines data={currentSparkline.sparklines}>
				<SparklinesLine />
				<SparklinesSpots />
			</Sparklines>
		</td>
	);
}

export default GenerateSparkline;

// currentCoinSparklineData.market_data.sparkline_7d.price
