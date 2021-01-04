import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadset,
  faMoneyBillAlt,
  faPercent,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";

const Advantages = () => {
  return (
    <Container>
      <Row style={{ margin: "50px 0px", textAlign: "center" }}>
        <Col sm={12} md={6} lg={3}>
          <FontAwesomeIcon
            icon={faTruck}
            size="2x"
            style={{ marginBottom: "15px" }}
          />
          <h5>Free Shipping</h5>
          <p>Free shipping on all order</p>
        </Col>
        <Col sm={12} md={6} lg={3}>
          <FontAwesomeIcon
            icon={faHeadset}
            size="2x"
            style={{ marginBottom: "15px" }}
          />
          <h5>Support 24/7</h5>
          <p>Free shipping on all order</p>
        </Col>
        <Col sm={12} md={6} lg={3}>
          <FontAwesomeIcon
            icon={faMoneyBillAlt}
            size="2x"
            style={{ marginBottom: "15px" }}
          />
          <h5>Money Return</h5>
          <p>Free shipping on all order</p>
        </Col>
        <Col sm={12} md={6} lg={3}>
          <FontAwesomeIcon
            icon={faPercent}
            size="2x"
            style={{ marginBottom: "15px" }}
          />
          <h5>Order Discount</h5>
          <p>Free shipping on all order</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Advantages;
