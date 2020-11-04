import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

function GenerateSparkline({ sparkline }) {
	return (
		<div>
			{
				<Sparklines data={[21, 51, 351, 6, 5]}>
					<SparklinesLine color="red" />
				</Sparklines>
			}
		</div>
	);
}

export default GenerateSparkline;

// coinSparklines.market_data.sparkline_7d.price;
