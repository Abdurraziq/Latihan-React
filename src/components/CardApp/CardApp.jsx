import React, { Component } from "react";
import { Card, Col } from "react-bootstrap";
import "./CardApp.css";

export default class CardApp extends Component {
  render() {
    return (
      <Col className="mb-4">
        <Card className="h-100">
          <Card.Img variant="top" src={this.props.img} />
          <Card.Body className="bg-light d-flex flex-column">
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text className="mb-4 small">{this.props.text}</Card.Text>
            {this.props.action && (
              <div className="mt-auto d-flex">{this.props.action}</div>
            )}
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
