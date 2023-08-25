import React from "react";
import { Container } from "react-bootstrap";
import "./Introduction.css";
import Logo from "../../assets/images/lh_shortform_logo.svg";

function Introduction() {
  return (
    <div className="intro-bg">
      <Container className="intro-container">
        <table className="intro-title-table">
          <tbody>
            <tr>
              <td rowSpan={2}>
                <img
                  className="intro-title-logo"
                  src={Logo}
                  alt="lighthouse_digital_logo"
                ></img>
              </td>
              <td className="intro-title">Lighthouse Digital is a</td>
            </tr>
            <tr>
              <td className="intro-title">consulting firm for web3</td>
            </tr>
          </tbody>
        </table>
        <hr className="intro-title-divider bg-cong-lu-green"></hr>
        <p className="intro-content ">
          We are <span className="cong-lu-green-bold">crypto-natives</span> who
          have been investing and building in web3 for 8 years. Founded in 2023,
          Lighthouse Digital is a{" "}
          <span className="cong-lu-green-bold">research & thesis driven</span>{" "}
          web3 consulting firm.
        </p>
        <p className="intro-content">
          We invest, consult and contribute to companies and protocols at the
          earliest stages and continue to provide{" "}
          <span className="cong-lu-green-bold">our full support</span> to our
          portfolio companies & clients throughout their lifecycle.
        </p>
      </Container>
    </div>
  );
}

export default Introduction;
