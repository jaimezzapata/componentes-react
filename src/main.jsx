import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Header.jsx";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <h1>Holi</h1>
    <App />
  </React.StrictMode>
);
