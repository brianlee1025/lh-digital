import React from "react";
import { Container } from "react-bootstrap";
import LeftVLTable from "../../component/LeftVLTable/LeftVLTable";
import "./Contact.css";

function Contact() {
  const leftVLTableContactProp = {
    title: "Contact",
    details: [
      <span>Get in touch with us today @ </span>,
      <a
        className="cong-lu-green-bold"
        href="mailto:contact@lighthousedigital.xyz"
      >
        contact@lighthousedigital.xyz
      </a>,
    ],
  };

  return (
    <Container>
      <LeftVLTable data={leftVLTableContactProp}></LeftVLTable>
    </Container>
  );
}

export default Contact;
