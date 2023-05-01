import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Store from './redux/Store.js'
import "./index.css";
import { Provider } from "react-redux";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);
