import React, { Fragment, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { productsContext } from "../../contexts/ProductsContext";
import {
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
  Button,
  ButtonGroup,
} from "reactstrap";

const AddProduct = () => {
  const [product, setProduct] = useState({});

  const { addProduct, products } = useContext(productsContext);

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
        <h3>Add Product</h3>
        <br />
        <br />

        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Add Title</InputGroupText>
          </InputGroupAddon>
          <Input type="text" name="title" onChange={handleInputsValue} />
        </InputGroup>
        <br />

        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Add Description</InputGroupText>
          </InputGroupAddon>
          <Input type="text" name="description" onChange={handleInputsValue} />
        </InputGroup>
        <br />

        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Add Price</InputGroupText>
          </InputGroupAddon>
          <Input type="text" name="price" onChange={handleInputsValue} />
        </InputGroup>
        <br />

        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Add Image</InputGroupText>
          </InputGroupAddon>
          <Input type="text" name="image" onChange={handleInputsValue} />
        </InputGroup>
        <br />
        <form>
          <ButtonGroup>
            <Button
              type="submit"
              className="btn btn-primary"
              onClick={() => addProduct(product)}
            >
              Save Product
            </Button>
            <Link to="/admin">
              <Button type="button" className="btn btn-warning mx-3">
                Show Products
              </Button>
            </Link>
          </ButtonGroup>
          </form>
      </div>
    </Fragment>
  );
};

export default AddProduct;
