import React, { Component } from "react";
import { Container } from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
      <Container className="mt-4">
        <h2 className="font-weight-bold mb-2">About</h2>
        <h3>Apa sih ini?</h3>
        <p>Ini hanyalah sebuah halaman About.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ad
          numquam nisi laborum aperiam, temporibus nemo tempore fuga
          necessitatibus placeat eos suscipit nesciunt sint dolor expedita porro
          minima quis. Impedit.. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quo ad numquam nisi laborum aperiam, temporibus nemo
          tempore fuga necessitatibus placeat eos suscipit nesciunt sint dolor
          expedita porro minima quis. Impedit.. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quo ad numquam nisi laborum aperiam,
          temporibus nemo tempore fuga necessitatibus placeat eos suscipit
          nesciunt sint dolor expedita porro minima quis. Impedit..
        </p>
      </Container>
    );
  }
}
