import React from 'react';
import cryptoStore from '../../stores/crypto-store';
import { loadDerivativesList } from '../../actions/action-creators';
import './buttonNextDerivatives.css';

function ButtonNextDerivatives() {
	return (
		<button type="button" onclick>
			Next
		</button>
	);
}

export default ButtonNextDerivatives;
