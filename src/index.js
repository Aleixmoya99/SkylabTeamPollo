import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ListCrypto from "./components/ListCrypto/ListCryptoCurrency";
import DetailCrypto from "./components/DetailCrypto/DetailCrypto";

ReactDOM.render(
  <React.StrictMode>
    <DetailCrypto />
  </React.StrictMode>,
  document.getElementById("root")
);
