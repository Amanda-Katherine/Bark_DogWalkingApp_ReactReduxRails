import React from "react";
import ReactDOM from "react-dom"; //responsible for virtual DOM
import App from "./App";
// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from "./reducers/index";
// import thunk from "redux-thunk";
// import { Provider } from "react-redux";

// const store = createStore(
//   rootReducer,
//   initialState,
//   compose(applyMiddleware(thunk), composeWithDevTools())
// );

ReactDOM.render(
  // <Provider store={store}>
  <App />,
  // </Provider>,
  document.getElementById("root")
);
