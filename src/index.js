import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundry from "./components/error-boundry/error-boundry";
import RestoServiceContext from "./components/resto-service-context/resto-service-context";
import store from "./store";

import "./index.scss";

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <RestoServiceContext>
        <Router>
          <App />
        </Router>
      </RestoServiceContext>
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root")
);
