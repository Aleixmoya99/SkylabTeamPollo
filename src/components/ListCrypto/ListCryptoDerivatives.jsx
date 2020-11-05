import React, { useEffect, useState } from "react";
import cryptoStore from "../../stores/crypto-store";
import { loadDerivativesList } from "../../actions/action-creators";

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
        <div>
          <ul className="derivativesList">
            Derivatives
            {derivativesList ? (
              derivativesList.data.map((data) => {
                let yearEstablished;

                if (data.year_established !== null) {
                  yearEstablished = data.year_established;
                } else {
                  yearEstablished = "N/A";
                }

                return (
                  <>
                    <li key={data.id}>
                      <img alt="lala" src={data.image} />
                      {`${data.name} 
                                    Number of Perpetual Pairs: ${data.number_of_perpetual_pairs} 
                                    Futures Pairs: ${data.number_of_futures_pairs} 
                                    Website: `}{" "}
                      {<a href={data.url}>{data.name}</a>}
                      {yearEstablished}
                    </li>
                  </>
                );
              })
            ) : (
              <li>Loading</li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ListCryptoDerivatives;
