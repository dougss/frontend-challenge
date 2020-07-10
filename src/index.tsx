import React from "react";
import ReactDOM from "react-dom";
import "./common/css/index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";

import { createStore } from "redux";
import { registerUser } from "./store/reducers";
import { RegisterStoreState } from "./store/types";

const store = createStore<RegisterStoreState>(registerUser, {
  name: "",
  age: null,
  email: "",
  newsletter: false,
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();