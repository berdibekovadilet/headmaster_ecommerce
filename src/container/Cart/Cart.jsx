import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Table, Button, Input } from "reactstrap";
import { productsContext } from "../../contexts/ProductsContext";
import { calcSubPrice, calcTotalPrice } from "../../helpers/calcPrice";

const Cart = () => {
  const {
    cartData,
    getCart,
    changeCountProducts,
    makeOrder,
    deleteItem,
  } = useContext(productsContext);
  useEffect(() => {
    getCart();
  }, []);

  function handleChangeCount(e, id) {
    changeCountProducts(e.target.value, id);
  }

  return (
    <Container>
      <div>
        {cartData.products ? (
          <>
            <Table>
              <thead style={{ backgroundColor: "black", color: "white" }}>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Count</th>
                  <th>SubTotal</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {cartData.products.map((item) => (
                  <tr key={item.product.id}>
                    <td>
                      <img
                        style={{ width: "70px" }}
                        src={item.product.image}
                        alt="image"
                      />
                    </td>

                    <td>{item.product.title}</td>
                    <td>{item.product.price}</td>
                    <td>
                      <Input
                        onChange={(e) => handleChangeCount(e, item.product.id)}
                        min="1"
                        value={item.count}
                        type="number"
                        style={{width: "100px"}}
                      />
                    </td>
                    <td>{calcSubPrice(item)}</td>
                    <td>
                      {" "}
                      <Button
                        className="btn-admin"
                        style={{ marginTop: "20px" }}
                        className="btn btn-danger"
                        onClick={() => deleteItem(item.product.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>

              <div style={{ marginTop: "5.5rem" }}>
                <p style={{ fontSize: "1.6rem" }}>
                  TOTAL: <strong> {calcTotalPrice(cartData.products)} $</strong>
                </p>
               
                <Link to="/checkout">
                  <button
                    Button
                    onClick={makeOrder}
                    className="btn btn-primary"
                  >
                    CHECKOUT
                  </button>
                </Link>
              </div>
            </Table>
          </>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </Container>
  );
};

export default Cart;
