import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import Input from "../../components/UI/Input";
import { login } from '../../actions'
import {useDispatch } from 'react-redux'
/**
 * @author
 * @function Signin
 **/
//21480297
const Signin = (props) => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
 const dispatch = useDispatch();
    const userLogin = (e) => {
        e.preventDefault();
        
        const user = {
            email, password
        }
        dispatch(login(user))
    }
  return (
    <div>
      <Layout>
        <Container>
          <Row style={{ marginTop: "50px" }}>
            <Col md={{ span: 6, offset: 3 }}>
              <Form onSubmit={ userLogin } >
                <Input
                  label="Email"
                  placeholder="Your Email"
                  value={ email }
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                  label="Password"
                  placeholder="Password"
                  value={ password }
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
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

export default Signin;
