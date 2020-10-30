import React, { Component, Fragment } from "react";
import { Container, Row } from "react-bootstrap";
import CardApp from "../../components/CardApp/CardApp";
import LoadIndicator from "../../components/LoadIndicator/LoadIndicator";
import ButtonApp from "../../components/ButtonApp/ButtonApp";

export default class ListProduk extends Component {
  constructor() {
    super();
    this.state = {
      length: 0,
      products: [],
    };
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          length: res.length,
          products: res,
        })
      )
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { products, length } = this.state;
    const productItem = products.map((product) => (
      <CardApp
        key={product.id}
        img={product.image}
        title={product.title}
        text={product.description}
        action={
          <Fragment>
            <ButtonApp
              btn={{
                variant: "outline-primary",
                className: "flex-fill mr-1",
                size: "sm",
              }}
              icon="fas fa-shopping-cart"
              title="Beli"
            />
            <ButtonApp
              btn={{
                variant: "outline-danger",
                className: "flex-fill mr-1",
                size: "sm",
              }}
              icon="fas fa-shopping-cart"
              title="Favorite"
            />
          </Fragment>
        }
      />
    ));

    return (
      <Container className="mt-4">
        <h2 className="font-weight-bold mb-2">Daftar Produk</h2>
        <p className="font-italic text-muted mb-4">
          Produk yang ditampilkan berikut ini hanya berupa data dummy yang
          diambil dari <a href="https://fakestoreapi.com/">fakestoreapi</a>
        </p>

        {length ? (
          <Row xs={1} md={2} lg={3}>
            {productItem}
          </Row>
        ) : (
          <LoadIndicator />
        )}
      </Container>
    );
  }
}
