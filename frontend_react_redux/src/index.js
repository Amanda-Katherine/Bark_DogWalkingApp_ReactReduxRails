import React from "react";
import ReactDOM from "react-dom"; //responsible for virtual DOM
import App from "./App";
import { compose, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
import { Provider } from "react-redux";

const initialState = { users: [], dogs: [], appointments: [] };

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(thunk), composeWithDevTools())
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
