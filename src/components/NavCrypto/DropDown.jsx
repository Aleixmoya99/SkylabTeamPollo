import React from 'react';
import './DropDown.css';

function DropDown({ options, ulClassName, liClassName, index }) {
	let ulClass = ulClassName;
	let liClass = liClassName;

	return (
		<>
			<ul className={ulClass} key={index}>
				{Object.keys(options).map((optionKey, index) => {
					let value = options[optionKey];
					if (value === null) {
						return (
							<li className={liClass}>
								<a href="cryptocurrencies">{optionKey}</a>
							</li>
						);
					} else {
						return (
							<>
								<li className={liClass}>
									<a href="cryptocurrencies">{optionKey}</a>
									<DropDown options={value} />
								</li>
							</>
						);
					}
				})}
			</ul>
		</>
	);
}

export default DropDown;
