import React from "react";
import { Container } from "react-bootstrap";
import "./Achievements.css";
import CountUp from "react-countup";

function Achievements() {
  return (
    <Container>
      <table className="achievement-table">
        <tbody>
          <tr>
            <td>Capital Raised for web3 Projects</td>
            <td>Web3 Companies Incubated & Accelerated</td>
            <td>Years of web3 Experience</td>
            <td>Capital Deployed by web2 Funds Consulted</td>
          </tr>
          <tr>
            <td>
              <hr></hr>
            </td>
            <td>
              <hr></hr>
            </td>
            <td>
              <hr></hr>
            </td>
            <td>
              <hr></hr>
            </td>
          </tr>
          <tr className="cong-lu-green">
            <td>
              <CountUp end={15} duration={5} prefix="$" suffix=" M+"></CountUp>
            </td>
            <td>
              <CountUp end={55} duration={5} suffix="+"></CountUp>
            </td>
            <td>
              <CountUp end={8} duration={5}></CountUp>
            </td>
            <td>
              <CountUp end={35} duration={5} prefix="$" suffix=" M+"></CountUp>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}

export default Achievements;
