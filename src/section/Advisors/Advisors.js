import React from "react";
import { Container } from "react-bootstrap";
import "./Advisors.css";

function Advisors() {
  return (
    <Container>
      <div className="advisors-div">
        <span className="advisors-title">Advisors</span>

        <div className="advisors-tables">
          <table>
            <tbody>
              <tr className="cong-lu-green advisors-names">
                <td>INSEAD Association</td>
                <td>Daniel O.</td>
                <td>Ouroboros Capital</td>
              </tr>
              <tr className="advisors-desc">
                <td>Web 3 Collective</td>
                <td>Head of DeFi, Algorand</td>
                <td>Web 3 Hedge Fund & VC</td>
              </tr>
            </tbody>
          </table>

          <table>
            <tbody>
              <tr className="cong-lu-green advisors-names">
                <td>Elina N.</td>
                <td>Castle Capital</td>
                <td>CJ</td>
              </tr>
              <tr className="advisors-desc">
                <td>Former IMX Marketing Lead</td>
                <td>DeFi Native VC</td>
                <td>VC Analyst & DeFi Sleuth</td>
              </tr>
            </tbody>
          </table>

          <table>
            <tbody>
              <tr className="advisors-etc">
                <td colSpan={3}>and more</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
}

export default Advisors;
