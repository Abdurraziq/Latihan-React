import React, { Component } from "react";
import { Spinner } from 'react-bootstrap'

export default class LoadIndicator extends Component {
  render() {
    return (
      <div className="text-center">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }
}
