import React from "react";
import "./NavCrypto.css";

function NavCrypto() {
  return (
    <nav className="header">
      <ul className="nav">
        <li className="desktop">
          <a href="*">Cryptocurrecies</a>
        </li>
        <li className="desktop">
          <a href="*">Products</a>
          <ul>
            <li>
              <a href="*">Where to buy</a>
            </li>
            <li>
              <a href="*">Mobile Apps</a>
            </li>
            <li>
              <a href="*">Interest</a>
            </li>
            <li>
              <a href="*">Jobs Board</a>
            </li>
          </ul>
        </li>
        <li className="desktop">
          <a href="*">Learn</a>
          <ul>
            <li>
              <a href="*">Crypto basics</a>
            </li>
            <li>
              <a href="*">How-to Guide</a>
            </li>
            <li>
              <a href="*">Glossary</a>
            </li>
            <li>
              <a href="*">FAQ</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="*">Home</a>
        </li>
        <li>
          <a href="*">About</a>
        </li>
        <li>
          <a href="*">Log In</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavCrypto;
