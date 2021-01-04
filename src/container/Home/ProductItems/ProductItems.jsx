import React, { useContext, useEffect } from "react";
import { productsContext } from "../../../contexts/ProductsContext";
import { Link } from "react-router-dom";
import { Button, Row, Col, Container, ButtonGroup } from "reactstrap";

import "./ProductItems.css";

const ProductItems = () => {
  const {
    addAndDeleteProductInCart,
    checkProductInCart,
    addAndDeleteProductInWish,
    checkProductInWish,
    products,
    getProducts,
    pageTask,
    page,
  } = useContext(productsContext);

  useEffect(() => {
    getProducts();
    pageTask(page);
  }, [page]);

  const listItems = products.map((item) => (
    <div className="card col-lg-4 col-md-6 col-sm-12 col-12" key={item.id}>
      <div className="card_img">
        <Link to={`/productcart/${item.id}`}>
          <img src={item.image} className="col-lg-12" alt="image" />
        </Link>
      </div>
      <div className="card_header">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p className="price">
          {item.price}
          <span>{item.currency}</span>
        </p>
        <div>
          <ButtonGroup>
          <Button
            onClick={() => addAndDeleteProductInCart(item)}
            className={
              checkProductInCart(item.id) ? "btn btn-danger" : "btn btn-success"
            }
          >
            Add to cart
          </Button>
          <Button
            onClick={() => addAndDeleteProductInWish(item)}
            className={
              checkProductInWish(item.id) ? "btn btn-dark" : "btn btn-info"
            }
          >
            Add to wish
          </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="main_content">
      <h3 style={{ textAlign: "center" }}>Headphones</h3>
      {listItems}
      <Container>
        <Row>
          <Col col="12" style={{ textAlign: "center" }}>
            <Link to="/fashion">
              <Button className="btn btn-dark">Watch All</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductItems;
