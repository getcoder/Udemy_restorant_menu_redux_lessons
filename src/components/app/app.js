import React from "react";
import MainPage from "../pages/main-page";
import CartPage from "../pages/cart-page";
import AppHeader from "../app-header/app-header";
import { Switch, Route } from "react-router-dom";

import Background from "./food-bg.jpg";

const App = () => {
  return (
    <div
      style={{ background: `url(${Background}) center center/cover no-repeat` }}
      className="app"
    >
      <AppHeader  />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/cart/" component={CartPage} />
      </Switch>
    </div>
  );
};



export default App;
