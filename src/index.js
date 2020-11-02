import React from "react";
import ReactDOM from "react-dom";

import "./styles/normalize.css";
import "./styles/index.css";

import ListCrypto from "./components/ListCrypto/ListCryptoDerivatives";

ReactDOM.render(
  <React.StrictMode>
    <ListCrypto />
  </React.StrictMode>,
  document.getElementById("root")
);
