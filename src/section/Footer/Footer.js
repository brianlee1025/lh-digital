import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";
import LinkedinImg from "../../assets/images/linkedin.png";
import XImg from "../../assets/images/x.png";

function Footer() {
  return (
    <Container className="footer-container">
      <hr />
      <div className="footer-main">
        <div className="footer-logo"></div>
        <div className="footer-detail">
          <span className="tetsu-green">Collaborate</span>
          <div className="black-vl"></div>
          <span className="census">Innovate</span>
          <div className="black-vl"></div>
          <span className="cong-lu-green">Elevate</span>
        </div>
        <div className="footer-social-media">
          <img src={LinkedinImg} alt="LH_LinkedIn"></img>
          <img src={XImg} alt="LH_X"></img>
        </div>
      </div>
      <div className="footer-copyright">
        <span>© 2023 Lighthouse Digital. All Rights Reserved.</span>
      </div>
    </Container>
  );
}

export default Footer;
