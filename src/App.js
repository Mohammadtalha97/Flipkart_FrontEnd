import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./containers/HomePage";
import ProductListPage from "./containers/ProductListPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { isUserLoggedIn, updateCart } from "./redux/actions";
import ProductDetailPage from "./containers/ProductDetailsPage";
import CartPage from "./containers/CartPage";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.authenticated) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.authenticated]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
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
