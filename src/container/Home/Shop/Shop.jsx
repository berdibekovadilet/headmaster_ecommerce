import React, { useEffect, useContext } from "react";
import { useHistory, Link } from "react-router-dom";

import {
  Container,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Button,
  ButtonGroup,
} from "reactstrap";

import Pagination from "@material-ui/lab/Pagination";
import { productsContext } from "../../../contexts/ProductsContext";
import "./Shop.css";

const Shop = (props) => {
  const styles = {
    fashion: {
      backgroundColor: "rgb(248, 246, 246)",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "row",
      textAlign: "center",
      paddingTop: "22px",
      marginTop: "27px",
    },
    shop: {
      paddingTop: "100px",
    },
    first: {
      border: "1px solid  rgb(165, 159, 159)",
      width: "160px",
      marginLeft: "30px",
    },
    second: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      marginTop: "45px",
    },
    paging: {
      display: "flex",
      justifyContent: "center",
    },
  };

  const {
    products,
    getProducts,
    addAndDeleteProductInCart,
    addAndDeleteProductInWish,
    checkProductInCart,
    checkProductInWish,
    pageTask,
    totalCount,
    getProductsFashion,
  } = useContext(productsContext);

  const history = useHistory();
  const search = new URLSearchParams(history.location.search);

  function fetchParams(params, value) {
    if (value === "All") {
      props.history.push(props.location.pathname.replace(params));
      getProducts();
      return;
    }
    let search = new URLSearchParams(props.history.location.search);
    search.set(params, value);
    let url = `${props.location.pathname}?${search.toString()}`;
    props.history.push(url);
    console.log(params);
    getProducts();
  }

  useEffect(() => {
    getProductsFashion();
    getProducts();
  }, []);

  const listItems = products.map((item) => (
    <div className="card col-lg-4 col-md-6 col-sm-12 col-12" key={item.id}>
      <div className="card_img">
        <Link to={`/productcart/${item.id}`}>
          <img src={item.image} className="col-lg-12" alt="photo" />
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
                checkProductInCart(item.id)
                  ? "btn btn-danger"
                  : "btn btn-success"
              }
            >
              Add to cart
            </Button>{" "}
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
    <div>
      <Nav style={styles.fashion}>
        <NavItem style={styles.shop}></NavItem>
      </Nav>
      <Container style={styles.second}>
        <UncontrolledDropdown inNavbar>
          <DropdownToggle style={styles.first} nav caret>
            Prices
          </DropdownToggle>
          <DropdownMenu
            aria-label="price"
            name="price"
            onClick={(event) => fetchParams("price_lte=", event.target.value)}
          >
            <DropdownItem value="200">Below 200</DropdownItem>
            <DropdownItem value="300">Below 300</DropdownItem>
            <DropdownItem value="400">Below 400</DropdownItem>
            <DropdownItem value="500">Below 500</DropdownItem>
            <DropdownItem value="All">All</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>

        <UncontrolledDropdown style={styles.first} inNavbar>
          <DropdownToggle nav caret>
            All Brands
          </DropdownToggle>
          <DropdownMenu
            style={styles.first}
            right
            aria-label="title"
            name="title"
            onClick={(event) => fetchParams("title", event.target.value)}
          >
            <DropdownItem value="Apple">Apple</DropdownItem>
            <DropdownItem value="Sony">Sony</DropdownItem>
            <DropdownItem value="Bose">Bose</DropdownItem>
            <DropdownItem value="All">All</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Container>
      <div className="main_content">{listItems}</div>

      <Container>
        <div style={styles.paging}>
          <Pagination
            onChange={(e, newpage) => pageTask(newpage)}
            page={parseInt(search.get("_page")) || 1}
            count={Math.ceil(totalCount / 6)}
            defaultPage={1}
          />
        </div>
      </Container>
    </div>
  );
};

export default Shop;
