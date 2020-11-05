import React from 'react';
import './InputSearch.css';

function InputSearch() {
	return (
		<>
			<form class="search-desktop">
				<input
					type="text"
					placeholder="Search.."
					name="search2"
					className="inputSearch"
				/>
				<button type="submit">
					<i class="fa fa-search"></i>
				</button>
			</form>
		</>
	);
}

export default InputSearch;
