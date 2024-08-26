import React from 'react';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';

const CustomNavbar = ({ links }) => {
  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg" className="shadow-sm py-3">
      <Container>
        <BootstrapNavbar.Brand href="#home" className="fw-bold">Zachary Chapman</BootstrapNavbar.Brand>
        
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {links.map((link, index) => (
              <div key={index} className="nav-item px-2">
                {link}
              </div>
            ))}
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default CustomNavbar;
