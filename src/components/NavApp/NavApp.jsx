import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default class NavApp extends Component {
  render() {
    const { navItems } = this.props;

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
                <Nav.Link
                  as={NavLink}
                  exact
                  to={item.link}
                  eventKey={item.label}
                  key={index}
                >
                  {item.label}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
