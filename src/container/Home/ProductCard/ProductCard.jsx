import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container, Button } from "reactstrap";
import { productsContext } from "../../../contexts/ProductsContext";

const ProductCard = (props) => {
  const {
    products,
    addAndDeleteProductInCart,
    getProductID,
    productDetails,
  } = useContext(productsContext);

  useEffect(() => {
    getProductID(props.match.params.id);
  }, []);

  return (
    <div className="mainProductCard">
      {productDetails != null ? (
        <>
          <Container>
            <Row>
              <Col lg="4" md="6" xs="12" style={{ marginleft: "30px" }}>
                <img
                  style={{ width: "100%" }}
                  src={productDetails.image}
                  alt="image"
                ></img>
              </Col>
              <Col lg="6" md="6" xs="12">
                <h2>{productDetails.title}</h2>
                <h6 style={{ margin: "40px 0" }}>
                  {productDetails.description}
                </h6>
                <h4>{productDetails.price} $ </h4>

                <Link to="/cart">
                  <Button
                    className="btn btn-info"
                    onClick={() => addAndDeleteProductInCart(productDetails)}
                  >
                    Buy now
                  </Button>
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <h4 style={{ margin: "40px 0" }}>Description</h4>
                <h6 style={{ marginBottom: "100px" }}>
                  {productDetails.description}
                </h6>
              </Col>
            </Row>
          </Container>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProductCard;
