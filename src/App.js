import "./App.css";
// import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./containers/HomePage";
import ProductListPage from "./containers/ProductListPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { isUserLoggedIn, updateCart } from "./redux/actions";
import ProductDetailPage from "./containers/ProductDetailsPage";
import CartPage from "./containers/CartPage";
import CheckoutPage from "./containers/CheckoutPage";

function App() {
  // const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.authenticated) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.authenticated]);

  useEffect(() => {
    console.log("App.js - updateCart");
    dispatch(updateCart());
  }, [auth.authenticated]);

  // useEffect(() => {
  //   console.log("useEffect-->", count);
  // }, [count]);

  // console.log("Outside-->", count);
  // const onBtnClick = () => {
  //   setCount(count + 1);
  //   console.log("Inside-->", count);
  // };

  return (
    <div className="App">
      {/* <p>{count}</p>
      <button onClick={onBtnClick}>Click</button> */}
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/checkout" component={CheckoutPage} />

          <Route path="/cart" component={CartPage} />
          <Route
            path="/:productSlug/:productId/p"
            component={ProductDetailPage}
          />
          <Route path="/:slug" component={ProductListPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
