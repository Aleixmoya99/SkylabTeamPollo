import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles/normalize.css";
import "./styles/index.css";
import NavCrypto from "./components/NavCrypto/NavCrypto";
import ListCrypto from "./components/ListCrypto/ListCryptoCurrencies";
import ListCryptoDerivatives from "./components/ListCrypto/ListCryptoDerivatives";
import FooterCrypto from "./components/FooterCrypto/FooterCrypto";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavCrypto />
      <Switch>
        <Route path="/" component={ListCrypto} />
        <Route path="/" component={ListCryptoDerivatives} />
      </Switch>
      <FooterCrypto />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
