import React from 'react'
import Layout from '../../components/Layout'
import {Row,Col, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './home.css'
/**
* @author
* @function Home
**/

const Home = (props) => {
  return(
    <div>
        <Layout>
            {/* <Jumbotron>
            <h1>wellcome to admin dashboard</h1>

            </Jumbotron> */}
            <Container fluid>
            <Row>
              <Col md={2} className="sidebar">
                <ul>
                  <li><NavLink to={'/'}>Home</NavLink></li>
                  <li><NavLink to={'/products'}>Products</NavLink></li>
                  <li><NavLink to={'/orders'}>Orders</NavLink></li>
                </ul>
              </Col>
              <Col md={10} className="contents">contents</Col>
            </Row>
            </Container>
        </Layout>
    </div>
   )

 }

export default Home