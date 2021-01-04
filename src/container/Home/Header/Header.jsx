import React, { useContext } from "react";
import { productsContext } from "../../../contexts/ProductsContext";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import logo from "./img/logo-2.svg";
import {  Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Home = (props) => {
  const { productsCountInCart, productsCountInWish, searchProducts } = useContext(productsContext);

  const history = useHistory();

  function handleSearch(e) {
    let inp_val = e.target.value;
    const search = new URLSearchParams(window.location.search);
    search.set("q", inp_val);
    history.replace("?" + search);
    searchProducts();
  }

  return (
    <div>
      <Navbar bg="white" expand="lg">
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" style={{ height: "63px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/">Main</Link>
            <Link className="nav-link" to="/fashion">Shop</Link>
            <Link className="nav-link" to="/admin">Admin</Link>
            <Link className="nav-link" to="/cart">Cart</Link>
            <Link className="nav-link" to="/wish">Wishlist</Link>
          </Nav>
          <Nav>
            <Link className="nav-link" style={{ fontSize: "20x", color: "Black" }} href="/cart">
              <FontAwesomeIcon
                icon={faShoppingCart}
                color={productsCountInCart !== 0 ? "red" : "green"}
              />

              <> {productsCountInCart !== 0 ? "+" + productsCountInCart : ""}</>
            </Link>

            <Link className="nav-link" style={{ fontSize: "20x", color: "Black" }} href="/wish">
              <FontAwesomeIcon
                icon={faHeart}
                color={productsCountInWish !== 0 ? "dark" : "pink"}
              />

              <> {productsCountInWish !== 0 ? "+" + productsCountInWish : ""}</>
            </Link>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Поиск"
              className="mr-sm-2"
              onChange={handleSearch}
            />
          </Form>

          <Nav>
            <Link href="/signin">Sign In</Link>
            <Link href="/signup">Sign Up</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Home;
