import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { GlobalStyle } from "./assets/styles/globalStyles";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />

      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
