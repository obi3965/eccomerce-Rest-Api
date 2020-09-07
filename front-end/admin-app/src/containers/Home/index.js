import React from 'react'
import Layout from '../../components/Layout'
import { Jumbotron, Row,Col, Container } from 'react-bootstrap'
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
              <Col md={2} className="sidebar">sidebar</Col>
              <Col md={10} className="contents">contents</Col>
            </Row>
            </Container>
        </Layout>
    </div>
   )

 }

export default Home