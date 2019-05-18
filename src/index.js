import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import combineReducers from "./reducers";
import App from "./components/App";

ReactDOM.render(
  <Provider store={createStore(combineReducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
