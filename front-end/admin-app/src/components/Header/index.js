import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink, Link} from 'react-router-dom'
/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
  <Link to="/" className="navbar-brand">admin dashboard</Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="m-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Nav>
      <li className="nav-item">
       <NavLink to="/signin" className="nav-link">signin</NavLink> 
      </li>
      <li className="nav-item">
        <NavLink to="/signup" className="nav-link" >signup</NavLink>
      </li>
      
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
   
   )

 }

export default Header