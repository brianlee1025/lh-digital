import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <Navbar expand="lg" sticky="top">
      <Container className="navbar-container">
        <div className="navbar-brand-div">
          <Navbar.Brand href="#"></Navbar.Brand>
        </div>

        <Navbar.Toggle aria-controls="offcanvasNavbar-expand" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand"
          aria-labelledby="offcanvasNavbar-expand"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbar-expand">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="me-auto">
              <Nav.Link href="#home">Service</Nav.Link>
              <Nav.Link href="#link">Team</Nav.Link>
              <Nav.Link href="#home">Edge</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
