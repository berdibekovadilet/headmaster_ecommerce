import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Container, NavLink } from "reactstrap";

import instagram2 from "./image/instafeed-2.jpg";
import instagram3 from "./image/instafeed-3.jpg";
import instagram5 from "./image/instafeed-5.jpg";
import instagram6 from "./image/instafeed-6.jpg";

const styles = {
  instagram: {
    padding: "20px",
  },
  font: {
    marginLeft: "20px",
  },
  footer: {
    marginTop: "20px",
  },
  footer1: {
    marginBottom: "20px",
  },
  copy: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "90px",
    width: "1500",
    borderTop: "1px solid  rgb(218, 207, 207)",
    paddingTop: "20px",
  },
  copy1: {
    display: "flex",
    flexDirection: "row",
  },
};

const Footer = () => {
  return (
    <Container className="containerInst">
      <MDBFooter style={styles.font} className="font pt-4 mt-4">
        <MDBContainer fluid className="text-md-center">
          <MDBRow className="colInst">
            <MDBCol xs="2" md="3" sm="12" className="colInst2">
              <h5 style={styles.footer1} className="titleInst">
                Instagram
              </h5>
              <img style={styles.instagram} src={instagram6} alt="" />
              <img style={styles.instagram} src={instagram2} alt="" />
              <img style={styles.instagram} src={instagram3} alt="" />
              <img style={styles.instagram} src={instagram5} alt="" />
            </MDBCol>
            <MDBCol md="3" sm="12">
              <ul>
                <h5 className="title">About us</h5>
                <li style={styles.footer} className="list-unstyled">
                  <NavLink disabled href="#!">
                    About us
                  </NavLink>
                </li>
                <li className="list-unstyled">
                  <NavLink disabled href="#!">
                    FAQ
                  </NavLink>
                </li>
                <li className="list-unstyled">
                  <NavLink disabled href="#!">
                    Help
                  </NavLink>
                </li>
                <li className="list-unstyled">
                  <NavLink disabled href="#!">
                    Snipping & Return
                  </NavLink>
                </li>
              </ul>
            </MDBCol>
            <MDBCol md="3" sm="12">
              <ul>
                <h5 className="title">Product Categories</h5>
                <li style={styles.footer} className="list-unstyled">
                  <NavLink disabled href="#!">
                    Brands
                  </NavLink>
                </li>
                <li className="list-unstyled">
                  <NavLink disabled href="#!">
                    Professional
                  </NavLink>
                </li>
                <li className="list-unstyled">
                  <NavLink disabled href="#!">
                    Mobile Headphones
                  </NavLink>
                </li>
                <li className="list-unstyled">
                  <NavLink disabled href="#!">
                    Sales
                  </NavLink>
                </li>
              </ul>
            </MDBCol>
            <MDBCol md="3" sm="12">
              <ul>
                <h5 className="title">Connect</h5>
                <li style={styles.footer} className="list-unstyled">
                  <NavLink disabled href="#!">
                    2020 stockes is Bishkek
                  </NavLink>
                </li>
                <li className="list-unstyled">
                  <NavLink disabled href="#!">
                    124 Panfilova
                  </NavLink>
                </li>
                <li className="list-unstyled">
                  <NavLink disabled href="#!">
                    info@headmaster.com
                  </NavLink>
                </li>
                <li className="list-unstyled">
                  <NavLink disabled href="#!">
                    (+996) 709324322
                  </NavLink>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <Container>
          <MDBContainer>
            <MDBRow style={styles.copy}>
              <div style={styles.copy1}>
                <li className="list-unstyled">
                  <NavLink disabled href="#!">
                    Terms
                  </NavLink>
                </li>
                <li className="list-unstyled">
                  <NavLink disabled href="#!">
                    Privacy
                  </NavLink>
                </li>
                <li className="list-unstyled">
                  <NavLink disabled href="#!">
                    License
                  </NavLink>
                </li>
              </div>
              <div>
                <NavLink disabled>
                  &copy; {new Date().getFullYear()} Copyright HeadMaster - All
                  Right Reserved
                </NavLink>
              </div>
              <div style={styles.copy1}>
                <NavLink>
                  <i className="fab fa-twitter"></i>
                </NavLink>
                <NavLink>
                  <i className="fab fa-pinterest-p"></i>
                </NavLink>
                <NavLink>
                  <i className="fab fa-instagram"></i>
                </NavLink>
                <NavLink>
                  <i className="fab fa-facebook"></i>
                </NavLink>
              </div>
            </MDBRow>
          </MDBContainer>
        </Container>
      </MDBFooter>
    </Container>
  );
};

export default Footer;
