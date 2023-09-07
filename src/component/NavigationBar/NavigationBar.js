import React, { useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import "./NavigationBar.css";

function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClose = () => setMenuOpen(false);

  const onLinkClick = (id) => {
    if (menuOpen) toggleMenu();
    const element = document.getElementById(id);
    const headerOffset = 100;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <Navbar expand="lg" sticky="top">
      <Container className="navbar-container">
        <div
          className="navbar-brand-div"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Navbar.Brand></Navbar.Brand>
        </div>

        <Navbar.Toggle
          aria-controls="offcanvasNavbar-expand"
          onClick={toggleMenu}
        >
          <div className="lh-logo">
            <div className="bg-cong-lu-green"></div>
            <div className="bg-maniac-mansion"></div>
          </div>
        </Navbar.Toggle>
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand"
          aria-labelledby="offcanvasNavbar-expand"
          placement="end"
          restoreFocus={false}
          show={menuOpen}
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbar-expand"></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="me-auto">
              <Nav.Link onClick={() => onLinkClick("Services")}>
                Services
              </Nav.Link>
              <Nav.Link onClick={() => onLinkClick("Team")}>Team</Nav.Link>
              <Nav.Link onClick={() => onLinkClick("Edge")}>Edge</Nav.Link>
              <Nav.Link onClick={() => onLinkClick("Contact")}>
                Contact
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
