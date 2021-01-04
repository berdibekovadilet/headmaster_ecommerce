import React, { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input
} from "reactstrap";

import { productsContext } from "../../../contexts/ProductsContext";

const CheckOut = () => {
  const { makeOrder } = useContext(productsContext);

  const [product, setProduct] = useState({});

  function handleInputsValue(e) {
    let obj = {
      ...product,
      [e.target.name]: e.target.value,
    };

    setProduct(obj);
  }
  return (
    <Fragment>
      <div className="container EditProduct">
        <h3>Your Address</h3>
        <br />
        <br />

        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Add Name</InputGroupText>
          </InputGroupAddon>
          <Input type="text" name="title" onChange={handleInputsValue} />
        </InputGroup>
        <br />

        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Add Address</InputGroupText>
          </InputGroupAddon>
          <Input type="text" name="description" onChange={handleInputsValue} />
        </InputGroup>
        <br />

        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Add Phone</InputGroupText>
          </InputGroupAddon>
          <Input type="number" name="price" onChange={handleInputsValue} />
        </InputGroup>

        <br />
        <form>
          <Link to="/makeorder">
            <button Button onClick={makeOrder} className="btn btn-primary">
              PAY
            </button>
          </Link>
        </form>
      </div>
    </Fragment>
  );
};

export default CheckOut;
