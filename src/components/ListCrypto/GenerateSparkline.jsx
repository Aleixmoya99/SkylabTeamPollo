import React, { useEffect, useState } from "react";
import { loadCoinByID } from "../../actions/action-creators";
import cryptoStore from "../../stores/crypto-store";
import { Sparklines, SparklinesLine } from "react-sparklines";

function GenerateSparkline({ coinId }) {
  const [coinSparklines, setCoinSparklines] = useState(
    cryptoStore.getCryptoCoin()
  );

  function handleChange() {
    setCoinSparklines(cryptoStore.getCryptoCoin());
  }

  useEffect(() => {
    cryptoStore.addEventListener(handleChange);
    if (!coinSparklines) {
      loadCoinByID(coinId);
    }
    return () => {
      cryptoStore.removeEventListener(handleChange);
    };
  }, [coinSparklines]);

  return (
    <div>
      {coinSparklines && (
        <Sparklines data={coinSparklines.market_data.sparkline_7d.price}>
          <SparklinesLine color="white" />
        </Sparklines>
      )}
    </div>
  );
}

export default GenerateSparkline;
