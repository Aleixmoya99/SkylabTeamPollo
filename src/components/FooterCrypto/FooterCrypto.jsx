import React from "react";
import { Link } from "react-router-dom";

function FooterCrypto() {
  return (
    <footer className="footer-container">
      <section className="footer-subscribe">
        <div className="footer-message-text">
          <h2 className="footer-title">
            Be the first to know about <span>Crypto news everyday</span>
          </h2>
          <p className="footer-text">
            Get crypto analysis, news and updates right to your inbox! Sign up
            here so you don't miss a single newsletter.
          </p>
        </div>
        <div className="newsletter-inputs">
          <form method="post" action="mailto:subscribe@cryptopollos.com">
            <input
              type="email"
              id="email"
              name="emails"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
              placeholder="Enter your email address"
            />
            <button type="submit" className="newsletter-button">
              Subscribe now
            </button>
          </form>
        </div>
      </section>
      <section className="footer-links">
        <div className="links-socials">
          <ul>
            <li className="social-link footer-link">
              <Link to="/socials/facebook">Facebook</Link>
            </li>
            <li className="social-link footer-link">
              <Link to="/socials/twitter">Twitter</Link>
            </li>
            <li className="social-link footer-link">
              <Link to="/socials/telegram">Telegram</Link>
            </li>
            <li className="social-link footer-link">
              <Link to="/socials/instagram">Instagram</Link>
            </li>
          </ul>
        </div>
        <div className="links-info">
          <ul>
            <li className="info-link footer-link">
              <Link to="/info/about-us">About us</Link>
            </li>
            <li className="info-link footer-link">
              <Link to="/info/terms-of-use">Terms of use</Link>
            </li>
            <li className="info-link footer-link">
              <Link to="/info/privacy-policy">Privacy policy</Link>
            </li>
            <li className="info-link footer-link">
              <Link to="/info/contact-support">Contact support</Link>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}

export default FooterCrypto;
