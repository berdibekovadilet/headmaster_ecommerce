import React, { useContext, useEffect } from "react";
import { Container, Table, Button } from "reactstrap";
import { productsContext } from "../../contexts/ProductsContext";

const Wish = () => {
  const { wishData, getWish, deleteItemWish } = useContext(productsContext);
  useEffect(() => {
    getWish();
  }, []);

  return (
    <Container>
      <div>
        {wishData.products ? (
          <>
            <Table>
              <thead style={{ backgroundColor: "pink", color: "white" }}>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {wishData.products.map((item) => (
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
                      {" "}
                      <Button
                        className="btn-admin"
                        style={{ marginTop: "20px" }}
                        className="btn btn-danger"
                        onClick={() => deleteItemWish(item.product.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </Container>
  );
};

export default Wish;
