// src/components/Login/Login.js
import React, { useContext, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { DisplaySidebarContext } from '../../components/ContextHook/useDisplayContext';
import { Link } from 'react-router-dom';

function Login() {
  const { setDisplaySidebarPanel } = useContext(DisplaySidebarContext);

  useEffect(() => {
    setDisplaySidebarPanel(false);
  }, [setDisplaySidebarPanel]);

  return (
    <Container className="d-flex  justify-content-center align-items-center" >
      <Row className="w-100 mt-lg-5">
        <Col sm={12} md={6} lg={4} className="mx-auto">
          <Card className="shadow">
            <Card.Body>
              <h2 className="text-center mb-4">Login</h2>
              <Form>
                <Form.Group controlId="username" className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Enter username" />
                </Form.Group>
                <Form.Group controlId="password" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>
                <Link to="/dashboard">
                  <Button onClick={()=>{setDisplaySidebarPanel(true)}} variant="primary" type="submit" className="w-100">Login</Button>
                </Link>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
