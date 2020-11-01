import React, { useContext, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import illustration from "../../assets/img/login-ilustration.svg";
import { authContext } from "../../context/AuthContext";
import "./Login.css";

const Login = (props) => {
  const { setDataLogin } = useContext(authContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      setDataLogin({
        email: email,
        password: password,
      });
      props.history.push("/");
    } else {
      alert("Email dan Password harus dimasukkan")
    }
  };

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
              <Form onSubmit={handleLogin}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    className="rounded-pill"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    className="rounded-pill"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </Form.Group>
                <Button
                  variant="outline-primary"
                  block
                  type="submit"
                  className="mt-5 rounded-pill"
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
};

export default Login;
