import './Header.css';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={RRNavLink} exact to="/">
          BRET
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={RRNavLink} exact to="/">
              Home
            </Nav.Link>
            <Nav.Link as={RRNavLink} exact to="/chemical-disease">
              Chemical-Disease
            </Nav.Link>
            <Nav.Link as={RRNavLink} exact to="/drug-drug">
              Drug-Drug
            </Nav.Link>
            <Nav.Link as={RRNavLink} exact to="/gene-disease">
              Gene-Disease
            </Nav.Link>
            <Nav.Link as={RRNavLink} exact to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
