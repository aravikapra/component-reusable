import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Style.css'; // Import file CSS tambahan

function CustomNavbar({ brandText, links }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">{brandText}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {links.map((link, index) => (
              <Nav.Link key={index} href={link.url}>{link.text}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
