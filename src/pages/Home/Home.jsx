import React, { Component, Fragment } from "react";
import { Container } from "react-bootstrap";
import CarouselApp from "../../components/CarouselApp/CarouselApp";

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <CarouselApp
          items={[
            {
              image: "https://wallpaperaccess.com/download/light-gray-1109072",
              title: "DigiStore",
              subTitle: "Toko DigiStore",
            },
            {
              image: "https://wallpaperaccess.com/download/light-gray-1109072",
              title: "DigiStore",
              subTitle: "Toko DigiStore",
            },
            {
              image: "https://wallpaperaccess.com/download/light-gray-1109072",
              title: "DigiStore",
              subTitle: "Toko DigiStore",
            },
          ]}
        />
        <Container className="mt-4">
          <h2 className="font-weight-bold mb-2">Daftar Produk</h2>
        </Container>
      </Fragment>
    );
  }
}
