import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import NavCrypto from "./components/NavCrypto/NavCrypto";
import ListCrypto from "./components/ListCrypto/ListCryptoCurrency";
import DetailCrypto from "./components/DetailCrypto/DetailCrypto";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavCrypto />
      <Switch>
        <Route path="/" exact component={ListCrypto} />
        <Route path="/detail/:cryptoId" component={DetailCrypto} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
