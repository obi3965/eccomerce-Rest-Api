import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink, Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { signout } from '../../actions'
import './navbar.css'
/**
* @author
* @function Header
**/

const Header = (props) => {
const auth = useSelector(state => state.auth);
const dispatch = useDispatch();
const logout = () =>{
dispatch(signout())
}
  const renderLoggedInLinks = () =>{
    return (
    <Nav>
      <li className="nav-item">
       <span className="nav-link" onClick={ logout } >signout</span> 
      </li>
     
      
    </Nav>
    )
  }

  const renderNonLoggedInLinks = () =>{
    return (
    <Nav>
      <li className="nav-item">
       <NavLink to="/signin" className="nav-link">signin</NavLink> 
      </li>
     
      <li className="nav-item">
       <NavLink to="/signup" className="nav-link">signup</NavLink> 
      </li>
    </Nav>
    )
  }
  return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
  <Link to="/" className="navbar-brand">admin dashboard</Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    {/* <Nav className="m-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav> */}
    
    { auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}
  </Navbar.Collapse>
  </Container>
</Navbar>
   
   )

 }

export default Header