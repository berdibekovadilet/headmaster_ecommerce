import React, { useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Container, Table, Button, ButtonGroup } from "reactstrap";
import Pagination from "@material-ui/lab/Pagination";
import { productsContext } from "../../contexts/ProductsContext";

const styles = {
  first: {
    display: "flex",
    justifyContent: "center",
  },
};

const Admin = (props) => {
  const history = useHistory();
  const search = new URLSearchParams(history.location.search);

  const {
    products,
    getProducts,
    deleteContact,
    editProduct,
    pageTask,
    getProductsAdmin,
    totalCount,
  } = useContext(productsContext);

  useEffect(() => {
    getProductsAdmin();
    getProducts();
  }, []);

  return (
    <>
      <Link to="/addproduct">
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <button type="submit" className="btn btn-primary my-5">
            Add New Product
          </button>
        </div>
      </Link>
      <Container fluid>
        <Table>
          <thead style={{backgroundColor: "black", color: "white"}}>
            <tr>
              <th className="description">#</th>
              <th>Title</th>
              <th className="description">Description</th>
              <th>Image</th>
              <th>Price</th>
              <th>Manipulate</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <>
                <tr>
                  <th className="description" scope="row">
                    {item.id}
                  </th>
                  <td>{item.title}</td>
                  <td className="description" style={{ width: "30%" }}>
                    {item.description}
                  </td>
                  <td style={{ width: "15%" }}>
                    <img style={{ width: "50%" }} src={item.image} />
                  </td>
                  <td>{item.price}</td>
                  <td>
                    <ButtonGroup>
                      <Button
                        className="btn-admin"
                        style={{ marginTop: "20px" }}
                        className="btn btn-danger"
                        onClick={() => deleteContact(item.id)}
                      >
                        Delete
                      </Button>
                      <Link to="/edit">
                        <Button
                          className="btn-admin"
                          style={{ marginTop: "20px" }}
                          className="btn btn-warning"
                          onClick={() => editProduct(item.id)}
                        >
                          Edit
                        </Button>
                      </Link>
                    </ButtonGroup>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </Table>
      </Container>
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
    </>
  );
};

export default Admin;
