import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// REDUX
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
// import { combineReducers } from "redux"; // to seperate reducers
import { gameReducer } from "./state/reducers/gameReducer";
import { initialState } from "./state/initialState";

const store = createStore(gameReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
