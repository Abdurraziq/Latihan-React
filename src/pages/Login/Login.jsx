import React, { Component } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import illustration from "../../assets/img/login-ilustration.svg";
import "./Login.css";

export default class Login extends Component {
  render() {
    return (
      <Container className="d-flex align-items-center justify-content-center login-container">
        <Card className="shadow">
          <Row noGutters>
            <Col md={7} className="d-none d-md-block">
              <Card.Img src={illustration} />
            </Col>
            <Col md={5}>
              <Card.Body>
                <Card.Title as="h2" className="text-primary">
                  Login
                </Card.Title>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      className="rounded-pill"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      className="rounded-pill"
                    />
                  </Form.Group>
                  <Button
                    variant="outline-primary"
                    block
                    type="submit"
                    className="mt-4 rounded-pill"
                  >
                    Login
                  </Button>
                </Form>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    );
  }
}
