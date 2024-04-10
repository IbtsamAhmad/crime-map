import React from "react";
import Facebook from "../../icons/Facebook.svg"
import Tiktok from "../../icons/Tiktok.svg"
import Twitter from "../../icons/Twitter.svg"
import {Row , Col} from "react-bootstrap"
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <Row>
          <Col lg={5} md={5}>
            <a href="/">
              <img src="/assets/Logo.png" className="footer-logo" />
            </a>
          </Col>
          <Col lg={2} md={2}>
            <h1>Company</h1>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/how">How it Works</a>
              </li>
              <li>
                <a href="/pricing">Pricing</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </Col>
          <Col lg={2} md={2}>
            <h1>Resources</h1>
            <ul>
              <li>
                <a href="/">About Cover Letters</a>
              </li>
            </ul>
          </Col>
          <Col lg={3} md={3}>
            <h1>About</h1>
            <ul>
              <li>
                <a href="/">Terms & Conditions</a>
              </li>
              <li>
                <a href="/">Privacy policy</a>
              </li>
            </ul>
            <div className="icons">
              <a
                href="https://twitter.com/pufferfishai"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img src={Twitter} alt="" />
              </a>
              <a
                href="https://www.tiktok.com/@pufferfish.ai"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img src={Tiktok} alt="" className="tik" />
              </a>
              <a
                href="facebook.com/pufferfishaiapp/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Facebook} alt="" />
              </a>
            </div>
          </Col>
        </Row>
      </div>
      <div className="footer-line" />
      <p className="copy-right">Copyright © 2023 pufferfish.ai</p>
    </div>
  );
};

export default Footer;
