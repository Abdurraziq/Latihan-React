import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class ButtonApp extends Component {
  render() {
    const { btn, icon, title } = this.props;
    return (
      <Button {...btn}>
        {icon && <i className={icon}></i>} {title}
      </Button>
    );
  }
}
