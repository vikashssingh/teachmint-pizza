import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/Store.js";
import { BrowserRouter as Router } from "react-router-dom";

// Using ReactDOM.createRoot for concurrent mode
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

// Wrapping the entire application with React.StrictMode
root.render(
  <React.StrictMode>
    {/* Using BrowserRouter for routing */}
    <Router>
      {/* Providing the Redux store to the entire app */}
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
