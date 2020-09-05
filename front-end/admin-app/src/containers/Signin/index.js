import React from "react";
import Layout from "../../components/Layout";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import Input from "../../components/UI/Input";
import { login } from '../../actions'
/**
 * @author
 * @function Signin
 **/
//21480297
const Signin = (props) => {

    const userLogin = (e) => {
        e.preventDefault();
        
        const user = {
            email: 'obi@gmail.com',
            password:'12345678'
        }
        login(user)
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

export default Signin;
