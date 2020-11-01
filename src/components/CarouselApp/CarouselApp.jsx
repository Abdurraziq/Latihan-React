import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "./CarouselApp.css";

export default class CarouselApp extends Component {
  render() {
    const { items } = this.props;

    const carouselItem = items.map(({ image, title, subTitle }, index) => (
      <Carousel.Item key={index}>
        <img className="d-block w-100" src={image} alt="slide img" />
        <Carousel.Caption>
          <h1>{title}</h1>
          <p>{subTitle}</p>
        </Carousel.Caption>
      </Carousel.Item>
    ));

    return <Carousel>{carouselItem}</Carousel>;
  }
}
