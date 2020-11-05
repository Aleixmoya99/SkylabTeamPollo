import React from 'react';
import './ButtonNavList.css';
import { changeList } from '../../../actions/action-creators';
function ButtonNavList() {
	return (
		<>
			<div className="buttonWatch" onClick={changeList}>
				<span id="favorites" className="fas fa-star" onClick={changeList} />{' '}
				Watchlist
			</div>
		</>
	);
}
export default ButtonNavList;
