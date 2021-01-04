import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./container/Home/Footer/Footer";
import Header from "./container/Home/Header/Header";
import HomePage from "./container/Home/HomePage/HomePage";
import ProductsContextProvider from "./contexts/ProductsContext";
import Admin from "./container/AdminPage/Admin";
import Shop from "./container/Home/Shop/Shop";
import AddProduct from "./container/AdminPage/AddProduct";
import SignIn from "./container/Home/SignIn/SignIn";
import SignUp from "./container/Home/SignUp/SignUp";
import AuthContextProvider from "./contexts/AuthContext";
import EditProduct from "./container/AdminPage/EditProduct";
import Cart from "./container/Cart/Cart";
import Wish from "./container/Cart/Wish";
import ProductCard from "./container/Home/ProductCard/ProductCard";
import CreditCard from "./container/CreditCard/PaymentCard/CreditCard";
import CheckOut from "./container/CreditCard/CheckOut/CheckOut";

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <ProductsContextProvider>
          <Header />
          <Switch>
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/addproduct" component={AddProduct} />
            <Route exact path="/edit" component={EditProduct} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/fashion" component={Shop} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/wish" component={Wish} />
            <Route exact path="/productcart/:id" component={ProductCard} />
            <Route exact path="/makeorder" component={CreditCard} />
            <Route exact path="/checkout" component={CheckOut} />
            <AuthContextProvider>
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/signup" component={SignUp} />
            </AuthContextProvider>
          </Switch>
          <Footer />
        </ProductsContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
