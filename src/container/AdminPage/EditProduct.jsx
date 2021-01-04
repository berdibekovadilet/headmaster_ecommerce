import React, { Fragment, useContext, useEffect, useState } from "react";
import { productsContext } from "../../contexts/ProductsContext";
import { FormGroup, Label, Input, FormText } from "reactstrap";
import { Link } from "react-router-dom";

const EditProduct = (props) => {
  const { productsToEdit, saveProduct } = useContext(productsContext);
  const [editItem, setEditItem] = useState(productsToEdit);

  useEffect(() => {
    setEditItem(productsToEdit);
  }, [productsToEdit]);

  function handle(e) {
    let obj = {
      ...editItem,
      [e.target.name]: e.target.value,
    };
    setEditItem(obj);
  }

  return (
    <div>
      {editItem ? (
        <div>
          <Fragment>
            <div className="container EditProduct">
              <h3>Add Product</h3>
              <br />
              <br />

              <form>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Product Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={editItem.title}
                    onChange={handle}
                  />
                </div>
                <br />

                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Description</label>
                  <input
                    className="form-control"
                    name="description"
                    value={editItem.description}
                    onChange={handle}
                  />
                </div>
                <br />

                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Price</label>
                  <input
                    type="text"
                    className="form-control"
                    name="price"
                    value={editItem.price}
                    onChange={handle}
                  />
                </div>
                <br />

                <FormGroup>
                  <Label for="exampleFile">Add Image</Label>
                  <Input
                    type="text"
                    name="image"
                    value={editItem.image}
                    onChange={handle}
                  />
                  <FormText color="muted">
                    This is some placeholder block-level help text for the above
                    input. It's a bit lighter and easily wraps to a new line.
                  </FormText>
                </FormGroup>

                <br />
                <Link to="/admin">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={() => saveProduct(editItem, props.history)}
                  >
                    Save Product
                  </button>
                </Link>
              </form>
            </div>
          </Fragment>
        </div>
      ) : (
        <h2>Loading</h2>
      )}
    </div>
  );
};

export default EditProduct;
