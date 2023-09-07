import React from "react";
import { Container } from "react-bootstrap";
import LeftVLTable from "../../component/LeftVLTable/LeftVLTable";
import "./Services.css";

function Services() {
  const leftVLTableServiceProp = {
    title: "Services",
    details: [
      <span>We adopt an</span>,
      <span className="cong-lu-green-bold">
        {" "}
        extensively hands-on approach
      </span>,
      <span> in</span>,
      <span className="cong-lu-green-bold">
        {" "}
        assisting projects to realize their full potential
      </span>,
      <span>
        {" "}
        by providing angel investments, fundraising support & full stack
        consulting
      </span>,
    ],
  };
  return (
    <React.Fragment>
      <Container id="Services">
        <LeftVLTable data={leftVLTableServiceProp}></LeftVLTable>
      </Container>
      <div className="service-detail bg-maniac-mansion">
        <table className="service-detail-table">
          <tbody>
            <tr>
              <td className="service-detail-title service-detail-table-td">
                Ventures
              </td>
              <td className="service-detail-table-td">
                <div className="white-vl"></div>
              </td>
              <td className="service-detail-text service-detail-table-td">
                End-to-end comprehensive investment and fundraising support,
                optimizing chances of attracting the right investors
              </td>
            </tr>
            <tr>
              <td className="service-detail-title">Consulting</td>
              <td>
                <div className="white-vl"></div>
              </td>
              <td className="service-detail-text">
                Full-stack spectrum of services addressing challenges unique to
                web3 leveraging data-driven strategic insights
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default Services;
