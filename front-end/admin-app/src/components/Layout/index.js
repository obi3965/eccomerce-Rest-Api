import React from 'react'

import {Row,Col, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
/**
* @author
* @function Layout
**/

import Header from '../Header/index'
const Layout = (props) => {
  return(
    <>
    <Header/>
      {
        props.sidebar ?
        <Container fluid>
            <Row>
              <Col md={2} className="sidebar">
                <ul>
                  <li><NavLink to={'/'}>Home</NavLink></li>
                  <li><NavLink to={'/products'}>Products</NavLink></li>
                  <li><NavLink to={'/orders'}>Orders</NavLink></li>
                </ul>
              </Col>
              <Col md={10} className="contents">
              {props.children}
              </Col>
            </Row>
            </Container>
            :
            props.children
      }
      
    
    
    </>
   ) 

 }

export default Layout
