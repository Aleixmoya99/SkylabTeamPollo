import React from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

function GenerateSparkline({ currentSparkline }) {
	debugger;
	return (
		<td key={currentSparkline.id}>
			<Sparklines data={currentSparkline.sparklines}>
				<SparklinesLine
					style={{ fill: 'none' }}
					color="blue"
					limit={167}
					width={100}
					margin={1}
				/>
				<SparklinesSpots />
			</Sparklines>
		</td>
	);
}

export default GenerateSparkline;

// currentCoinSparklineData.market_data.sparkline_7d.price
