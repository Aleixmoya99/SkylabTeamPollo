import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles/normalize.css";
import "./styles/index.css";
import NavCrypto from "./components/NavCrypto/NavCrypto";
import ListCrypto from "./components/ListCrypto/ListCryptoCurrency";
import DetailCrypto from "./components/DetailCrypto/DetailCrypto";
import ListCryptoDerivatives from "./components/ListCrypto/ListCryptoDerivatives";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavCrypto />
      <Switch>
        <Route path="/l" exact component={ListCryptoDerivatives} />
        <Route path="/" exact component={ListCrypto} />
        <Route path="/detail/:cryptoId" component={DetailCrypto} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
