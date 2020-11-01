import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ListCrypto from "./components/ListCrypto/ListCryptoCurrency";
import { BrowserRouter, Route, Switch } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ListCrypto} />
        <Route path="/:cryptoId" exact component={ListCrypto} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
