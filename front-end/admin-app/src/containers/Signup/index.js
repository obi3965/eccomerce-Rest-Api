import React from "react";
import Layout from "../../components/Layout";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import Input from "../../components/UI/Input";
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
/**
 * @author
 * @function Signup
 **/

const Signup = (props) => {
  const auth = useSelector(state => state.auth);
  if(auth.authenticate){
    return <Redirect to={'/'} />
  }
  return (
    <div>
      <Layout>
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Form>
                <Row>
                  <Col md={6}>
                    <Input
                      label="First Name"
                      placeholder="First Name"
                      value=""
                      type="text"
                      onChange={() => {}}
                    />
                  </Col>
                  <Col md={6}>
                    <Input
                      label="Last Name"
                      placeholder="Last Name"
                      value=""
                      type="text"
                      onChange={() => {}}
                    />
                  </Col>
                </Row>
                <Input
                  label="Email"
                  placeholder="Your Email"
                  value=""
                  type="text"
                  onChange={() => {}}
                />

                <Input
                  label="Password"
                  placeholder="Password"
                  value=""
                  type="password"
                  onChange={() => {}}
                />

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
};

export default Signup;
