import React from "react";
import { Container } from "react-bootstrap";
import LeftVLTable from "../../component/LeftVLTable/LeftVLTable";
import "./Edge.css";

function Edge() {
  const leftVLTableEdgeProp = {
    title: "Edge",
    details: [
      "To ensure the delivery of top-notch work, we leverage upon a",
      " wealth of market-leading differentiators",
      " offered by no other Web3 consulting group",
    ],
  };

  const leftVLTableClientProp = {
    title: "Client",
    details: [
      "Throughout our years in Web2 and Web3, we have consulted",
      " Fortune 100 companies, digital pioneers, and emerging decentralized disruptors",
      " on various topics in strategy and execution fronts",
    ],
  };

  return (
    <Container>
      <LeftVLTable data={leftVLTableEdgeProp}></LeftVLTable>
      <LeftVLTable data={leftVLTableClientProp}></LeftVLTable>
    </Container>
  );
}

export default Edge;
