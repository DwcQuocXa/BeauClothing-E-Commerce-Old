import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";

import NavBar from "./components/NavBar";
import Products from "./components/Products";
import ProductDetails from "./components/Products/ProductCard/ProductDetail";
import SideDrawer from "./components/SideDrawer";
import { getProducts } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Switch>
        <Box sx={{ flexGrow: 1, display: "flex" }}>
          <NavBar />
          <Route exact path="/" render={() => <LandingPage />} />
          <Route exact path="/products" render={() => <SideDrawer />} />
          <Route exact path="/products" render={() => <Products />} />
          <Route
            exact
            path="/products/:productId"
            render={() => <ProductDetails />}
          />
        </Box>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
