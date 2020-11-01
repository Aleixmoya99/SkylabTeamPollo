import React from "react";
// import { BrowserRouter, Router } from "react-router-dom";
import NavCrypto from "../NavCrypto/NavCrypto";
import ListCrypto from "../ListCrypto/ListCryptoCurrency";
import DetailCrypto from "../DetailCrypto/DetailCrypto";

function Main() {
  return (
    <main>
      <NavCrypto />
      <ListCrypto />
      <DetailCrypto />
    </main>
  );
}

export default Main;
