import React, { useEffect, useState } from 'react';
import cryptoStore from '../../stores/crypto-store';
import { loadDerivativesList } from '../../actions/action-creators';
import './ListCrypto.css';
function ListCryptoDerivatives() {
	const [derivativesList, setDerivativesList] = useState(
		cryptoStore.getCryptoDerivatives()
	);
	function handleChange() {
		setDerivativesList(cryptoStore.getCryptoDerivatives());
	}
	useEffect(() => {
		cryptoStore.addEventListener(handleChange);
		if (!derivativesList) {
			loadDerivativesList();
		}
		return () => {
			cryptoStore.removeEventListener(handleChange);
		};
	}, [derivativesList]);
	return (
		<>
			<div>
				<div className="derivatives-list">
					<table className="table-container">
						<caption>Derivatives</caption>
						<thead className="table-headings">
							<tr>
								<th className="fix-column"></th>
								<th>Name</th>
								<th>Number of Perpetual Pairs</th>
								<th>Futures Pairs</th>
								<th>Website</th>
								<th>Year Established</th>
							</tr>
						</thead>
						<tbody>
							{derivativesList ? (
								derivativesList.data.map((data) => {
									let yearEstablished;
									if (data.year_established !== null) {
										yearEstablished = data.year_established;
									} else {
										yearEstablished = 'N/A';
									}
									return (
										<>
											<tr className="list-container">
												<td id="logo">
													<img alt="lala" src={data.image} />
												</td>
												<td>{data.name}</td>
												<td>{data.number_of_perpetual_pairs}</td>
												<td>{data.number_of_futures_pairs}</td>
												<td>{<a href={data.url}>{data.name}</a>}</td>
												<td>{yearEstablished}</td>
											</tr>
										</>
									);
								})
							) : (
								<td>Loading</td>
							)}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}
export default ListCryptoDerivatives;
