import React from "react";
import { Row, Col, Container } from "reactstrap";
import "./PromoBlock.css";

const PromoBlock = () => {
  return (
    <Container fluid >
      <h3
        style={{
          textAlign: "center",
          color: "#2d343e",
          fontSize: "8.5vw",
          paddingBottom: "50px",
        }}
      >
        Blogs
      </h3>
      <Row>
        <Col sm="12" md="12" lg="6" style={{ padding: 0 }}>
          <div className="promo__left">
            <div className="deskBlock1">
              <div className="miniDeskBlock1">
                <h2>Sony WH-1000XM2</h2>
                <h5>Noise Cancelling Wireless Headphones Review</h5>
              </div>
            </div>
          </div>
        </Col>
        <Col sm="12" md="12" lg="6" style={{ padding: 0 }}>
          <div className="promo__right_1">
            <div className="deskBlock2">
              <h2>Apple AirPods Max</h2>
              <div>
                <h6 className="miniDeskBlock3">
                  Competently innovate end-to-end <br></br> relationships
                  through timely <br></br>
                  customer service.
                </h6>
              </div>
            </div>
          </div>

          <div className="promo__right_2">
            <div className="deskBlock3">
              <h2>Headphones for Taxi</h2>
              <div className="miniDeskBlock5">
                <h6>
                  Competently innovate end-to-end <br></br> relationships
                  through timely <br></br>
                  customer service.{" "}
                </h6>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PromoBlock;
