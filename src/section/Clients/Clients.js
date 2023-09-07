import React from "react";
import { Container } from "react-bootstrap";
import LeftVLTable from "../../component/LeftVLTable/LeftVLTable";
import "./Client.css";

import ClientImg1 from "../../assets/images/clients-img-1.jpg";
import ClientImg2 from "../../assets/images/clients-img-2.jpg";
import ClientImg3 from "../../assets/images/clients-img-3.jpg";
import ClientImg4 from "../../assets/images/clients-img-4.jpg";
import ClientImg5 from "../../assets/images/clients-img-5.jpg";
import ClientImg6 from "../../assets/images/clients-img-6.jpg";
import ClientImg7 from "../../assets/images/clients-img-7.jpg";
import ClientImg8 from "../../assets/images/clients-img-8.jpg";
import ClientImg9 from "../../assets/images/clients-img-9.jpg";
import ClientImg10 from "../../assets/images/clients-img-10.jpg";
import ClientImg11 from "../../assets/images/clients-img-11.jpg";
import ClientImg12 from "../../assets/images/clients-img-12.jpg";
import ClientImg13 from "../../assets/images/clients-img-13.jpg";
import ClientImg14 from "../../assets/images/clients-img-14.jpg";
import ClientImg15 from "../../assets/images/clients-img-15.jpg";
import ClientImg16 from "../../assets/images/clients-img-16.jpg";
import ClientImg17 from "../../assets/images/clients-img-17.jpg";

function Clients() {
  const leftVLTableClientProp = {
    title: "Client",
    details: [
      <span>Throughout our years in Web2 and Web3, we have consulted</span>,
      <span className="cong-lu-green-bold">
        {" "}
        Fortune 100 companies, digital pioneers, and emerging decentralized
        disruptors
      </span>,
      <span> on various topics in strategy and execution fronts</span>,
    ],
  };
  const clientImgs = [
    ClientImg1,
    ClientImg2,
    ClientImg3,
    ClientImg4,
    ClientImg5,
    ClientImg6,
    ClientImg7,
    ClientImg8,
    ClientImg9,
    ClientImg10,
    ClientImg11,
    ClientImg12,
    ClientImg13,
    ClientImg14,
    ClientImg15,
    ClientImg16,
    ClientImg17,
  ];
  return (
    <Container>
      <LeftVLTable data={leftVLTableClientProp}></LeftVLTable>
      <div className="clients-div">
        {clientImgs.map((img, i) => {
          return (
            <div key={i}>
              <img src={img} alt={"client-img-" + i}></img>
            </div>
          );
        })}
        <div className="client-and-more">and more</div>
      </div>
    </Container>
  );
}

export default Clients;
