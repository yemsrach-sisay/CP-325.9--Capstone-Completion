import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./context/CartContext";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <Router>
        <App />
      </Router>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
