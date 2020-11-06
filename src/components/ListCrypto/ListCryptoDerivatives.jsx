import React, { useEffect, useState } from 'react';
import cryptoStore from '../../stores/crypto-store';
import { loadDerivativesList } from '../../actions/action-creators';
import './ListCrypto.css';
function ListCryptoDerivatives() {
	let [currentPage, setCurrentPage] = useState(1);

	const [derivativesList, setDerivativesList] = useState(
		cryptoStore.getCryptoDerivatives()
	);
	function handleChange() {
		setDerivativesList(cryptoStore.getCryptoDerivatives());
	}

	function nextPage() {
		if (currentPage < 3) {
			cryptoStore.addEventListener(handleChange);
			loadDerivativesList(20, currentPage + 1);
			cryptoStore.removeEventListener(handleChange);
			setCurrentPage(currentPage + 1);
		}
	}

	function prevPage() {
		if (currentPage > 1) {
			cryptoStore.addEventListener(handleChange);
			loadDerivativesList(20, currentPage - 1);
			cryptoStore.removeEventListener(handleChange);
			setCurrentPage(currentPage - 1);
		}
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
								<tr>
									<td>Loading</td>
								</tr>
							)}
						</tbody>
					</table>
					{derivativesList ? (
						<>
							<br />
							<div className="buttons">
								<button type="button" onClick={() => prevPage()}>
									<span class="material-icons" id="prev-btn">
										navigate_before
									</span>
								</button>
								<span className="numberPage">- {currentPage} - </span>
								<button type="button" onClick={() => nextPage()}>
									<span class="material-icons" id="next-btn">
										navigate_next
									</span>
								</button>
							</div>
						</>
					) : (
						<></>
					)}
				</div>
			</div>
		</>
	);
}
export default ListCryptoDerivatives;
