import React from "react";
import ReactDOM from "react-dom";
import Main from "./App";
import "./index.css";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import posts from './reducers/posts';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
const loggerMiddleware = createLogger();
const store = createStore(posts, undefined, applyMiddleware(thunkMiddleware, loggerMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <Main/>
  </Provider>,
  document.getElementById("root")
);