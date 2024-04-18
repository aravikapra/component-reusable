import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavbarSide({ menuItems }) {
  return (
    <Navbar bg="light" variant="light" expand="sm" className="flex-column">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="flex-column pt-5">
          {menuItems.map((item, index) => (
            <Nav.Link className='pt-3' key={index} as={Link} to={item.link}>{item.label}</Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarSide;
