import React from 'react';
import './InputSearch.css';

function InputSearch() {
	return (
		<>
			<form className="search-desktop">
				<input type="text" placeholder="Search.." name="search2" />
				<button type="submit">
					<em className="fa fa-search"></em>
				</button>
			</form>
		</>
	);
}

export default InputSearch;
