import React from "react";
import { Container } from "react-bootstrap";
import LeftVLTable from "../../component/LeftVLTable/LeftVLTable";
import "./Contact.css";

function Contact() {
  const leftVLTableContactProp = {
    title: "Contact",
    details: [
      <span>Get in touch with us today </span>,
      <a
        style={{ display: "block" }}
        className="cong-lu-green-bold"
        href="mailto:contact@lighthousedigital.xyz"
      >
        contact@lighthousedigital.xyz
      </a>,
    ],
  };

  return (
    <Container id="Contact">
      <LeftVLTable data={leftVLTableContactProp}></LeftVLTable>
    </Container>
  );
}

export default Contact;
