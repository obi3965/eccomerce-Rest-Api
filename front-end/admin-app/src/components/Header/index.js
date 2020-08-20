import React from "react";

import { Nav, Navbar, Container,NavLink  } from "react-bootstrap";
const Header = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
           
          </Nav>
          <Nav>
            <NavLink to="/signin">login</NavLink>
            <NavLink to="/signup">signup</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
