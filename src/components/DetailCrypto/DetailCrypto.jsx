import React, { useEffect, useState } from 'react';
import CryptoStore from '../../stores/crypto-store';
import { loadCoinById } from '../../actions/action-creators';
import './DetailCrypto.css';
function DetailCrypto({ match }) {
	const [cryptoCoin, setCryptCoin] = useState(null);
	const [coinId] = useState(+match.params.id);

	function handleChange() {
		setCryptCoin(CryptoStore.getCryptoCoin());
	}

	useEffect(() => {
		CryptoStore.addEventListener(handleChange);
		if (!cryptoCoin) {
			loadCoinById(match.params.id);
		}
		return () => {
			CryptoStore.removeEventListener(handleChange);
		};
	}, [cryptoCoin]);

	return (
		<>
			{cryptoCoin ? (
				<section>
					<figure class="presentation">
						<img id="logo" src={cryptoCoin.image.small} alt="crypto__logo" />
						<h1 class="presentationItem">{cryptoCoin.name}</h1>
						<h1 class="presentationItem">{cryptoCoin.symbol}</h1>
					</figure>
					<div class="firstRow">
						<h2 class="presentationItem">Rank {cryptoCoin.coingecko_rank}</h2>
						<h2 class="presentationItem">
							Price(€): {cryptoCoin.market_data.current_price.eur}€(
							{cryptoCoin.market_data.price_change_percentage_24h.toFixed(2)}
							%)
						</h2>
					</div>
					<div>
						<ul class="secondRow">
							<li>
								Price($): {cryptoCoin.market_data.current_price.usd}(
								{cryptoCoin.market_data.price_change_percentage_24h.toFixed(2)}
								%)
							</li>
							<li>
								Change in 24H(€):{' '}
								{
									cryptoCoin.market_data.price_change_percentage_24h_in_currency
										.eur
								}
							</li>
							<li>
								Change in 30D(€):{' '}
								{
									cryptoCoin.market_data.price_change_percentage_30d_in_currency
										.eur
								}
							</li>
							<li>
								Change in 1Y(€):{' '}
								{
									cryptoCoin.market_data.price_change_percentage_1y_in_currency
										.eur
								}
							</li>
							<li>Max Supply {cryptoCoin.market_data.total_supply} coins</li>
							<li>
								Circulating Supply {cryptoCoin.market_data.circulating_supply}{' '}
								Coins
							</li>
						</ul>
					</div>
					<br />
					<div className="description">{cryptoCoin.description.en}</div>
				</section>
			) : (
				<div>Loading...</div>
			)}
		</>
	);
}

export default DetailCrypto;
