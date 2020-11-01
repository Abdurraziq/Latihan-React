import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { authContext } from "../../context/AuthContext";

const NavApp = (props) => {
  const { dataLogin, logout } = useContext(authContext);
  const { navItems } = props;

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="dark"
      variant="dark"
      sticky="top"
      className="shadow-sm"
    >
      <Container>
        <Navbar.Brand href="/">DigiStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            {navItems.map((item, index) => (
              <Nav.Link as={NavLink} exact to={item.link} key={index}>
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
          <Button
            variant="primary"
            size="sm"
            className="ml-3"
            onClick={() => logout()}
          >
            {dataLogin ? "Logout" : "Login"}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavApp;
